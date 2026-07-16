import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";

export const commentService = {
  async getCommentsByImageId(imageId) {
    return await prisma.binh_luan.findMany({
      where: { hinh_id: Number(imageId) },
      include: {
        nguoi_dung: {
          select: { ho_ten: true, anh_dai_dien: true },
        },
      },
      orderBy: { ngay_binh_luan: "desc" },
    });
  },

  async createComment(req) {
    const userId = req.user?.nguoi_dung_id || req.user?.id;
    const { hinh_id, content } = req.body;

    if (!hinh_id || !content) {
      throw new BadRequestError(
        "Vui lòng cung cấp hinh_id và nội dung bình luận (content)",
      );
    }

    return await prisma.binh_luan.create({
      data: {
        nguoi_dung_id: Number(userId),
        hinh_id: Number(hinh_id),
        noi_dung: content,
        ngay_binh_luan: new Date(),
      },
    });
  },
};
