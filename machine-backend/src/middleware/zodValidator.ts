import { Request, Response, NextFunction } from "express";
import { ZodObject, ZodError } from "zod";

export const zodValidator = (schema: ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.safeParse({
        body: req.body,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.issues.map(err => ({
          field: err.path.join('.'),
          message: err.message,
        }));
        return res.status(400).json({
          errors: errors,
        });
      }
      next();
    }
  };
};