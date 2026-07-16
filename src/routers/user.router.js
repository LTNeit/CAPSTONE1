import express from "express";
import { userController } from "../controllers/user.controller.js";
import { uploadDiskStorage } from "../common/multer/disk-storage.multer.js";
import { authCookie } from "../common/middleware/authCookie.middleware.js";
import { uploadMemoryStorage } from "../common/multer/memory-storage.multer.js";

const userRouter = express.Router();

userRouter.get("/", userController.findAll);
userRouter.get("/:id", userController.findOne);

userRouter.post(
  "/avatar-local",
  authCookie,
  uploadDiskStorage.single("avatar"),
  userController.avatarLocal,
);

userRouter.post(
  "/avatar-cloud",
  authCookie,
  uploadMemoryStorage.single("avatar"),
  userController.avatarCloud,
);

userRouter.put("/profile", authCookie, userController.updateProfile);

userRouter.post("/saved-images", authCookie, userController.saveImage);

userRouter.delete(
  "/saved-images/:hinhId",
  authCookie,
  userController.deleteSavedImage,
);

userRouter.get("/:id/saved-images", userController.getSavedImages);

export default userRouter;
