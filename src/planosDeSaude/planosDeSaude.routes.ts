import { Router } from "express";
import { PlanoDeSaudeController } from "./planosDeSaude.controller.js";

const router = Router();
const planoDeSaudeController = new PlanoDeSaudeController();

router.get("/", planoDeSaudeController.list);
router.post("/", planoDeSaudeController.create);
router.put("/:id", planoDeSaudeController.update);
router.get("/:id", planoDeSaudeController.find);
router.delete("/:id", planoDeSaudeController.delete);

export default (app) => {
  app.use("/planosdesaude", router);
};
