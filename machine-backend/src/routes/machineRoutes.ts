import { Router } from "express";
import { createMachineSchema } from "../schemas/machineSchemas";
import { zodValidator } from "../middleware/zodValidator";
import * as machineController from "../controller/machineController";
import { machineIdSchemas } from "../schemas/machineIdSchemas";

const router = Router();

router
.get("/", machineController.getMaquina)
.post("/", zodValidator(createMachineSchema), machineController.newMaquina)
.put("/:id", zodValidator(createMachineSchema), machineController.updateMaquina)
.delete("/:id", zodValidator(machineIdSchemas), machineController.deleteMaquina);

export default router;

