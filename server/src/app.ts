import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { metricsMiddleware } from "./services/metricsService";
import timeRoutes from "./routes/timeRoutes";

const app = express();

app.use(express.json());
app.use(cors());

app.use(metricsMiddleware);

app.use(timeRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message });
});

export default app;
