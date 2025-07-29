import { NextFunction, Request, Response } from "express";
import * as machineService from "../services/machineService";

export const getMaquina = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const machines = await machineService.getMaquina();

   res.status(200).json({
      statusCode: 200,
      message: "Listagem concluida com sucesso",
      machines
     
    });
  } catch (error) {
    next(error);
  }
};

export const newMaquina = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, tipo } = req.body;
    const machine = await machineService.newMaquina({ name, tipo });

    res.status(204).json({
      statusCode: 204,
      message: "Adicionado com sucesso",
      machine
    });
  } catch (error) {
    next(error)
  }
};

export const updateMaquina = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, tipo } = req.body;

    const machine = await machineService.updateMaquina(id, { name, tipo });

    res.status(204).json({
      statusCode: 204,
      message: "Atualizado com sucesso",
      machine
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMaquina = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    await machineService.deleteMaquina(id);

    res.status(204).json({
      statusCode: 204,
      message: "Maquina removida com sucesso"
    });
  } catch (error) {
    next(error);
  }
}; 