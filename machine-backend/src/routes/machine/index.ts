import { Router } from "express";
import { createMachineSchema, machineIdSchemas } from "../../schemas";
import { zodValidator } from "../../middleware/machine/zodValidator";
import * as machineController from "../../controller/machine";
const router = Router();

router
.get("/", machineController.getMaquina)
.post("/", zodValidator(createMachineSchema), machineController.newMaquina)
.put("/:id", zodValidator(createMachineSchema), machineController.updateMaquina)
.delete("/:id", zodValidator(machineIdSchemas), machineController.deleteMaquina);

export default router;

