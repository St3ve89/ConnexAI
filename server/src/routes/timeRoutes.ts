import express, { NextFunction, RequestHandler, Response } from "express";
import { getCurrentTime } from "../services/timeService";
import { authMiddleware } from "../middlewares/authMiddleware";
import { schemaMiddleware } from "../middlewares/validateSchema";

const router = express.Router();

const timeSchema = {
  epoch: "number",
} as const;

const timeMiddleware: RequestHandler = (
  req,
  res: Response,
  next: NextFunction
) => {
  const timeData = getCurrentTime();
  res.locals.data = timeData;
  next();
};

const finalHandler: RequestHandler = (req, res) => {
  res.json(res.locals.data);
};

router.get(
  "/time",
  authMiddleware,
  timeMiddleware,
  schemaMiddleware(timeSchema),
  finalHandler
);

export default router;
