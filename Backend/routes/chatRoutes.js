import express from "express";
import protect from "../middlewares/authMiddleware.js";
const router = express.Router();
import accessChat from "../controllers/Chats/accessChat.js";
import createGroupChat from "../controllers/Chats/createGroupChat.js";
import renameGroup from "../controllers/Chats/renameGroup.js";
import addToGroup from "../controllers/Chats/addToGroup.js";
import removeFromGroup from "../controllers/Chats/removeFromGroup.js";
import fetchCommunities from "../controllers/Chats/fetchCommunities.js";
import updateDescription from "../controllers/Chats/updateDescription.js";
import fetchChats from "../controllers/Chats/fetchChats.js";

router.route("/").post(protect, accessChat).get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/updateDescription").put(protect, updateDescription);
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/communities").get(protect, fetchCommunities);

export default router;
