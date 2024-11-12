import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  const token = authorization?.split(" ")[1];

  if (token !== "mysecrettoken") {
    res.status(403).json({ message: "Unauthorized" });
    return;
  }
  next();
};
