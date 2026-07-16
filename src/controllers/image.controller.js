import { imageService } from "../services/image.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";

export const imageController = {
  async getList(req, res, next) {
    try {
      const result = await imageService.getListImages();
      const response = responseSuccess(result, `Lấy danh sách ảnh thành công`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async searchByName(req, res, next) {
    try {
      const { name } = req.query;
      const result = await imageService.searchImagesByName(name);
      const response = responseSuccess(result, `Tìm kiếm ảnh thành công`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async uploadImage(req, res, next) {
    try {
      const result = await imageService.uploadImage(req);
      const response = responseSuccess(result, `Tải ảnh lên thành công`);
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  },

  async getDetail(req, res, next) {
    try {
      const { id } = req.params;
      const result = await imageService.getImageDetail(id);
      const response = responseSuccess(result, `Lấy thông tin chi tiết ảnh thành công`);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },

  // Kiểm tra xem ảnh đã được lưu bởi user hiện tại chưa (Mới)
  async checkSaved(req, res, next) {
    try {
      const { id } = req.params; // hinh_id
      const userId = req.user?.nguoi_dung_id || req.user?.id;
      
      const result = await imageService.checkImageSavedStatus(id, userId);
      const response = responseSuccess(result, `Kiểm tra trạng thái lưu ảnh thành công`);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },

  async getCreatedImages(req, res, next) {
    try {
      const { id } = req.params; // lấy từ path động của user id (/api/users/:id/created-images)
      const result = await imageService.getCreatedImages(id);
      
      const response = responseSuccess(result, `Lấy danh sách ảnh đã tạo thành công`);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },

  async deleteImage(req, res, next) {
    try {
      const { id } = req.params;
      const userId = req.user?.nguoi_dung_id || req.user?.id;
      
      await imageService.deleteImage(id, userId);
      
      const response = responseSuccess(null, `Xóa ảnh thành công`);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
};