import * as machineRepository from "../repository/machine";
import { NewMaquina, UpdateMaquina, DeleteMaquina } from "./types";

export const getMaquina = () => machineRepository.getMaquina();

export const newMaquina = (data: NewMaquina.Args ) =>
  machineRepository.newMaquina(data);

export const updateMaquina = (args: UpdateMaquina.Args) => {
    const { id, ...data } = args;
    return machineRepository.updateMaquina({ id, ...data });
  }

export const deleteMaquina = (args: DeleteMaquina.Args) => {
const { id } = args;
    return machineRepository.deleteMaquina({ id });
} 
