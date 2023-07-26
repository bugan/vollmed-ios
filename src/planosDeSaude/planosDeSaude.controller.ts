import { Request, Response } from "express";
import { PlanoDeSaude } from "./planosDeSaude.entity.js";
import { AppDataSource } from "../data-source.js";

export class PlanoDeSaudeController {
  async list(req: Request, res: Response) {
    const planosDeSaude = await AppDataSource.manager.find<PlanoDeSaude>(
      PlanoDeSaude
    );
    res.json(planosDeSaude);
  }

  async find(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);

    try {
      const planoDeSaude = await AppDataSource.manager.findOne<PlanoDeSaude>(
        PlanoDeSaude,
        {
          where: { id },
        }
      );

      res.json(planoDeSaude);
    } catch (error) {
      res.status(404).json({ message: "Plano de saúde não encontrado." });
    }
  }

  async create(req: Request, res: Response) {
    const { nome, descricao } = req.body;
    const planoDeSaude = new PlanoDeSaude(nome, descricao);

    try {
      await AppDataSource.manager.save(planoDeSaude);
      res.status(201).json(planoDeSaude);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar o plano de saúde." });
    }
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const { nome, descricao } = req.body;

    try {
      const planoDeSaude =
        await AppDataSource.manager.findOneOrFail<PlanoDeSaude>(PlanoDeSaude, {
          where: { id },
        });
      planoDeSaude.nome = nome;
      planoDeSaude.descricao = descricao;
      await AppDataSource.manager.save(planoDeSaude);
      res.json(planoDeSaude);
    } catch (error) {
      res.status(404).json({ message: "Plano de saúde não encontrado." });
    }
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);

    try {
      const planoDeSaude = await AppDataSource.manager.findOneOrFail(
        PlanoDeSaude,
        { where: { id } }
      );
      await AppDataSource.manager.remove(planoDeSaude);
      res.json({ message: "Plano de saúde removido com sucesso." });
    } catch (error) {
      res.status(404).json({ message: "Plano de saúde não encontrado." });
    }
  }
}
