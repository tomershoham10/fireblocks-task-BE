import { Router } from "express";
import TasksController from "./controller.js";

const TasksRouter = Router();

TasksRouter.get("/", TasksController.getMany);

TasksRouter.post("/:id/complete", TasksController.completeTask);

TasksRouter.post("/", TasksController.addTask);

export default TasksRouter;
