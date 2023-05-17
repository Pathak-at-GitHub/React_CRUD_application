// Contains all user controllers
import { request } from "express";
import User from "../Schema/schema.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const addUser = async (request, response) => {
  const user = request.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (e) {
    response.status(409).json({ message: e.message });
  }
};
// export default addUser;

const getUser = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
    console.log(error);
  }
};

const getUserEdit = async (request, response) => {
  console.log("This is the user to be edited");
  console.log(request.params.id);
  try {
    const user = await User.find({ _id: request.params.id });
    // const user = await User.findById({ request.params.id });
    console.log(user);
    response.status(200).json(user);

    return response;
  } catch (error) {
    response.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const EditUser = async (request, response) => {
  let user = request.body;
  const edituser = new User(user);
  try {
    await user.updateOne({ _id: request.params.id }, EditUser);
    response.status(201).json({ message: "Edit user successfully" });
  } catch (error) {
    response.status(409).json({ message: error.message });
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({
      _id: req.params.id,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
    console.log("This is from delete api");
  }
};
export { getUser, addUser, getUserEdit };
