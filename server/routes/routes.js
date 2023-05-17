import express, { Router } from "express";
import {
  addUser,
  getUser,
  getUserEdit,
  EditUser,
  deleteUser,
} from "../Controller/user-Controller.js";
// import { EditUser } from "../../client/src/service/api";
// import Edit_user from "../../client/src/components/E";
// import  getUser  from "../Controller/user-Controller.js";
const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUser);
router.get("/:id", getUserEdit);
router.post("/:id", EditUser);
router.delete("/:id", deleteUser);

export default router;
