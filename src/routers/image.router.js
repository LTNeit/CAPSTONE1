import express from "express";
import { imageController } from "../controllers/image.controller.js";
import { uploadDiskStorage } from "../common/multer/disk-storage.multer.js";
import { authCookie } from "../common/middleware/authCookie.middleware.js";

const routeImage = express.Router();

routeImage.get("/list", imageController.getList);
routeImage.get("/search", imageController.searchByName);
routeImage.get("/detail/:id", imageController.getDetail);

routeImage.get("/check-saved/:id", authCookie, imageController.checkSaved);

routeImage.get("/created-images/:id", imageController.getCreatedImages);

routeImage.post(
  "/upload",
  authCookie,
  uploadDiskStorage.single("image"),
  imageController.uploadImage,
);

routeImage.delete("/:id", authCookie, imageController.deleteImage);

export default routeImage;
