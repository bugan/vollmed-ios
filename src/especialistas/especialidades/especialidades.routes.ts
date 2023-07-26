import { Router } from "express";
import { EspecialidadesController } from "./especialidades.controller.js";

const router = Router();
const especialidadesController = new EspecialidadesController();

router.post("/", especialidadesController.criarEspecialidade);
router.get("/", especialidadesController.listarEspecialidades);
router.get("/:id", especialidadesController.buscarEspecialidadePorId);
router.put("/:id", especialidadesController.atualizarEspecialidade);
router.delete("/:id", especialidadesController.deletarEspecialidade);

export default (app) => {
  app.use("/especialidade", router);
};
