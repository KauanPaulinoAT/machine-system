import * as machineRepository from "../repository/machineRepository";

export const getMaquina = () => machineRepository.getMaquina();

export const newMaquina = (data: { name: string; tipo: string }) =>
  machineRepository.newMaquina(data);

export const updateMaquina = (id: string, data: { name: string; tipo: string }) =>
  machineRepository.updateMaquina(id, data);

export const deleteMaquina = (id: string) => machineRepository.deleteMaquina(id);
