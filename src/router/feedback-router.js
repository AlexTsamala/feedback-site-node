import express from "express";
import {
  GetAllFeedbacks,
  CreateFeedback,
  DeleteFeedback,
  UpdateFeedback,
} from "../controllers/feedback-controller.js";

const feedbackRouter = express.Router();

feedbackRouter.get("/feedbacks", GetAllFeedbacks);
feedbackRouter.post("/feedbacks", CreateFeedback);
feedbackRouter.delete("/feedbacks/:id", DeleteFeedback);
feedbackRouter.put("/feedbacks", UpdateFeedback);

export default feedbackRouter;
