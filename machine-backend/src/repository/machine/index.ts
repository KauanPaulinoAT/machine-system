import { PrismaClient } from "@prisma/client";
import { NewMaquina, DeleteMaquina, UpdateMaquina } from "./types";
const prisma = new PrismaClient();

export const getMaquina = () => prisma.machine.findMany();

export const newMaquina = (data: NewMaquina.Args) =>
  prisma.machine.create({ data });

export const updateMaquina = (args: UpdateMaquina.Args) => {
  const { id, ...data } = args;
   prisma.machine.update({
    where: { id },
    data,
  });
}

export const deleteMaquina = (args: DeleteMaquina.Args) => {
    const { id } = args;
 prisma.machine.delete({
    where: { id },
  });
}
 
