import express from "express";
import * as TasksControllrer from "src/controllers/tasks";

const router = express.Router();

router.get("/", TasksControllrer.getAllTasks);

export default router;
