import { commentService } from "../services/comment.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";

export const commentController = {
  async getByImage(req, res, next) {
    try {
      const { imageId } = req.params;
      const result = await commentService.getCommentsByImageId(imageId);
      
      const response = responseSuccess(result, `Lấy danh sách bình luận thành công`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async postComment(req, res, next) {
    try {
      const result = await commentService.createComment(req);
      
      const response = responseSuccess(result, `Đăng bình luận thành công`);
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  }
};