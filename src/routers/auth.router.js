import express from "express";
import { authController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../common/middleware/auth.middleware.js";
import { protectMiddleware } from "../common/middleware/protect.middleware.js";
import { authCookie } from "../common/middleware/authCookie.middleware.js";
import passport from "passport";
const authRouter = express.Router();

authRouter.post("/login", authController.login);

authRouter.post("/register", authController.register);

authRouter.post("/forgot-password", authController.forgotPassword);

authRouter.get("/get-info", authCookie, authController.getInfo);

authRouter.post("/refresh-token", authController.refreshToken);

export default authRouter;
