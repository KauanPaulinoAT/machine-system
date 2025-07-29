import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getMaquina = () => prisma.machine.findMany();

export const newMaquina = (data: { name: string; tipo: string }) =>
  prisma.machine.create({ data });

export const updateMaquina = (id: string, data: { name: string; tipo: string }) =>
  prisma.machine.update({
    where: { id },
    data,
  });

export const deleteMaquina = (id: string) =>
  prisma.machine.delete({
    where: { id },
  });
