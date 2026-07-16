import express from "express";
import { commentController } from "../controllers/comment.controller.js";
import { authCookie } from "../common/middleware/authCookie.middleware.js";

const routeComment = express.Router();

routeComment.get("/image/:imageId", commentController.getByImage);

routeComment.post("/create", authCookie, commentController.postComment);

export default routeComment;
