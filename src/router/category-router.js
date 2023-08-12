import express from "express";
import {
  GetAllCategory,
  CreateCategory,
  DeleteCategory,
  UpdateCategory,
} from "../controllers/category-controller.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", GetAllCategory);
categoryRouter.post("/categories", CreateCategory);
categoryRouter.delete("/categories/:id", DeleteCategory);
categoryRouter.put("/categories", UpdateCategory);

export default categoryRouter;
