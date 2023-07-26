import { Request, Response } from "express";
import { Especialidade } from "./especialidade.entity.js";
import { AppDataSource } from "../../data-source.js";

export class EspecialidadesController {
  async criarEspecialidade(req: Request, res: Response) {
    const especialidade = AppDataSource.manager.create(Especialidade, req.body);
    const novaEspecialidade = await AppDataSource.manager.save(especialidade);
    res.status(201).json(novaEspecialidade);
  }

  async listarEspecialidades(req: Request, res: Response) {
    const especialidades = await AppDataSource.manager.find(Especialidade);

    res.status(200).json(especialidades);
  }

  async buscarEspecialidadePorId(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const especialidade = await AppDataSource.manager.findOne(Especialidade, {
      where: { id },
    });
    if (especialidade != null) {
      res.status(200).json(especialidade);
    } else {
      res.status(404).json({ message: "Especialidade não encontrada" });
    }
  }

  async atualizarEspecialidade(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const especialidade = await AppDataSource.manager.findOne(Especialidade, {
      where: { id },
    });
    if (especialidade != null) {
      AppDataSource.manager.merge(Especialidade, especialidade, req.body);
      const atualizacaoEspecialidade = await AppDataSource.manager.save(
        especialidade
      );
      res.status(200).json(atualizacaoEspecialidade);
    } else {
      res.status(404).json({ message: "Especialidade não encontrada" });
    }
  }

  async deletarEspecialidade(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const especialidade = await AppDataSource.manager.findOne(Especialidade, {
      where: { id },
    });
    if (especialidade != null) {
      await AppDataSource.manager.remove(especialidade);
      res.status(200).json(especialidade);
    } else {
      res.status(404).json({ message: "Especialidade não encontrada" });
    }
  }
}
