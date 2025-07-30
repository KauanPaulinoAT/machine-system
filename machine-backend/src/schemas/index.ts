import { z } from "zod";

export const createMachineSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    tipo: z.string().min(2),
  }),
});

export const machineIdSchemas = z.object({
  params: z.object({
    id: z.string().uuid(), 
  }),
});


