import express from "express";
import {
  addUsers,
  deleteUser,
  getUsers,
  updateUser,
} from "../services/user-services.js";

const user_router = express.Router();

user_router.get("/users/add", async (request, response) => {
  const result = await getUsers();
  console.log(result);

  response.status(200).send(result);
});

user_router.post("/users/add", async (request, response) => {
  const { firstName, lastName, email, phoneNumber, userRole } = request.body;

  const result = await addUsers(
    firstName,
    lastName,
    email,
    phoneNumber,
    userRole
  );

  console.log(result);

  response.status(200).send({});
});

user_router.delete("/users/add", async (request, response) => {
  const result = await deleteUser(user_id);
  console.log(result);

  response.status(200).send(result);
});

user_router.put("users/add", async (request, response) => {
  const result = await updateUser(firstName);
  console.log(result);

  response.status(200).send(result);
});
export default user_router;
