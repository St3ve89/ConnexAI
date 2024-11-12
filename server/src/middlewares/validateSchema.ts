import { Request, Response, NextFunction } from "express";

interface Schema {
  [key: string]: "number" | "string" | "boolean";
}

export const validateSchema = (
  schema: Schema,
  data: Record<string, any>
): boolean => {
  for (const key in schema) {
    if (!(key in data) || typeof data[key] !== schema[key]) {
      return false;
    }
  }
  return true;
};

export const schemaMiddleware =
  (schema: Schema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const isValid = validateSchema(schema, res.locals.data);

    if (!isValid) {
      res.status(400).json({ message: "Invalid response format" });
      return;
    }
    next();
  };
