import { request, response } from "express";
import Feedback from "../models/feedback.js";

export const GetAllFeedbacks = async (request, response) => {
  const data = await Feedback.find();

  return response.status(200).json(data);
};

export const CreateFeedback = async (request, response) => {
  const { title, category, status, description, id } = request.body;

  await Feedback.create({
    title,
    category,
    status,
    description,
    id,
  });

  response.status(200).send("Feedback was created successfully");
};

export const DeleteFeedback = async (request, response) => {
  const { id } = request.params;

  try {
    const result = await Feedback.deleteOne({ id });
    if (result.deletedCount === 1) {
      response.status(200).send("Feedback was deleted successfully");
    } else {
      response.status(404).send("Feedback not found");
    }
  } catch (error) {
    response.status(500).send("An error occurred while deleting the feedback");
  }
};

export const UpdateFeedback = async (request, response) => {
  const { id } = request.body;
  const updatedData = request.body;

  try {
    const result = await Feedback.updateOne({ id }, { $set: updatedData });
    if (result.matchedCount === 1) {
      response.status(200).send("Feedback was updated successfully");
    } else {
      response.status(404).send("Feedback not found");
    }
  } catch (error) {
    response.status(500).send("An error occurred while updating the feedback");
  }
};
