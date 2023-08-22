import express from "express";
import {
  CreateUser,
  LogInUser,
  DeleteUser,
} from "../controllers/users-controller.js";

const usersRouter = express.Router();

usersRouter.post("/users", CreateUser);
usersRouter.post("/users/log-in", LogInUser);
usersRouter.delete("/users/:id", DeleteUser);
export default usersRouter;
