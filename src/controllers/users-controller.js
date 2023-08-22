import Users from "../models/users.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

export const CreateUser = async (request, response) => {
  const { username, name, surname, password } = request.body;
  const id = uuidv4();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  await Users.create({
    username,
    name,
    surname,
    password: hashedPassword,
    id,
  });

  response.status(200).send("User was created successfully");
};

export const LogInUser = async (request, response) => {
  const { username, password } = request.body;

  const hashedPassword = await Users.findOne(
    {
      username,
    },
    { password: 1 }
  );

  const checkedPassword = await bcrypt.compare(
    password,
    hashedPassword.password
  );

  if (!checkedPassword) {
    response.status(401).send("Incorrect password");
  }

  response.status(200).send("User logged in successfully");
};

export const DeleteUser = async (request, response) => {
  const { id } = request.params;

  try {
    const result = await Users.deleteOne({ id });
    if (result.deletedCount === 1) {
      response.status(200).send("User was deleted successfully");
    } else {
      response.status(404).send("User not found");
    }
  } catch (error) {
    response.status(500).send("An error occurred while deleting the user");
  }
};
