import { responseSuccess } from "../common/helpers/response.helper.js";
import { userService } from "../services/user.service.js";

export const userController = {
  // 1. Cập nhật thông tin cá nhân (Mới)
  async updateProfile(req, res, next) {
    try {
      const result = await userService.updateProfile(req);
      const response = responseSuccess(result, `Cập nhật thông tin cá nhân thành công`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  // 2. Thực hiện hành động Lưu ảnh (Mới)
  async saveImage(req, res, next) {
    try {
      const result = await userService.saveImage(req);
      const response = responseSuccess(result, `Lưu hình ảnh thành công`);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  },

  // 3. Thực hiện hành động Hủy lưu ảnh (Mới)
  async deleteSavedImage(req, res, next) {
    try {
      await userService.deleteSavedImage(req);
      const response = responseSuccess(null, `Hủy lưu hình ảnh thành công`);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },

  // 4. Lấy danh sách ảnh đã lưu theo user id (Mới)
  async getSavedImages(req, res, next) {
    try {
      const { id } = req.params; // userId truyền từ route dạng /:id/saved-images
      const result = await userService.getSavedImagesByUserId(id);
      const response = responseSuccess(result, `Lấy danh sách ảnh đã lưu thành công`);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },

  // --- Các hàm cũ của bạn (Đã bọc try-catch chuẩn chỉnh) ---
  async findAll(req, res, next) {
    try {
      const result = await userService.findAll(req);
      const response = responseSuccess(result, `Get all users successfully`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async findOne(req, res, next) {
    try {
      const result = await userService.findOne(req);
      const response = responseSuccess(result, `Get user by id successfully`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async avatarLocal(req, res, next) {
    try {
      const result = await userService.avatarLocal(req);
      const response = responseSuccess(result, `Upload avatar locally successfully`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async avatarCloud(req, res, next) {
    try {
      const result = await userService.avatarCloud(req);
      const response = responseSuccess(result, `Upload avatar to cloud successfully`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
};