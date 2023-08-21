import Category from "../models/category.js";
import { v4 as uuidv4 } from "uuid";

export const GetAllCategory = async (request, response) => {
  const data = await Category.find();

  return response.status(200).json(data);
};

export const CreateCategory = async (request, response) => {
  const { name } = request.body;
  const id = uuidv4();
  await Category.create({
    name,
    id,
  });

  response.status(200).send("Category was created successfully");
};

export const DeleteCategory = async (request, response) => {
  const { id } = request.params;

  try {
    const result = await Category.deleteOne({ id });
    if (result.deletedCount === 1) {
      response.status(200).send("Category was deleted successfully");
    } else {
      response.status(404).send("Category not found");
    }
  } catch (error) {
    response.status(500).send("An error occurred while deleting the Category");
  }
};

export const UpdateCategory = async (request, response) => {
  const { id } = request.body;
  const updatedData = request.body;

  try {
    const result = await Category.updateOne({ id }, { $set: updatedData });
    if (result.matchedCount === 1) {
      response.status(200).send("Category was updated successfully");
    } else {
      response.status(404).send("Category not found");
    }
  } catch (error) {
    response.status(500).send("An error occurred while updating the Category");
  }
};
