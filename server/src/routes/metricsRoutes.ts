import express from "express";
import { metricsMiddleware } from "../services/metricsService.ts";

const router = express.Router();

router.use(metricsMiddleware);

export default router;
