import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";

export const imageService = {
  async getListImages() {
    return await prisma.hinh_anh.findMany({
      include: {
        nguoi_dung: {
          select: { ho_ten: true, anh_dai_dien: true },
        },
      },
      orderBy: { hinh_id: "desc" },
    });
  },

  async searchImagesByName(imageName) {
    if (!imageName) throw new BadRequestError("Vui lòng nhập tên ảnh cần tìm");

    return await prisma.hinh_anh.findMany({
      where: {
        ten_hinh: { contains: imageName },
      },
      include: {
        nguoi_dung: {
          select: { ho_ten: true, anh_dai_dien: true },
        },
      },
    });
  },

  async getImageDetail(imageId) {
    const image = await prisma.hinh_anh.findUnique({
      where: { hinh_id: Number(imageId) },
      include: {
        nguoi_dung: {
          select: { nguoi_dung_id: true, ho_ten: true, anh_dai_dien: true },
        },
      },
    });

    if (!image) throw new BadRequestError("Không tìm thấy hình ảnh này");
    return image;
  },

  async checkImageSavedStatus(imageId, userId) {
    const record = await prisma.luu_anh.findUnique({
      where: {
        nguoi_dung_id_hinh_id: {
          nguoi_dung_id: Number(userId),
          hinh_id: Number(imageId),
        },
      },
    });
    return { isSaved: !!record };
  },

  async getCreatedImages(userId) {
    return await prisma.hinh_anh.findMany({
      where: { nguoi_dung_id: Number(userId) },
      orderBy: { hinh_id: "desc" },
    });
  },

  async uploadImage(req) {
    if (!req.file) throw new BadRequestError("Vui lòng tải lên một tệp ảnh");

    const userId = req.user?.nguoi_dung_id || req.user?.id;
    const { description, image_name } = req.body;
    const imageUrl = `http://localhost:3069/users/${userId}/posts/${req.file.filename}`;

    return await prisma.hinh_anh.create({
      data: {
        ten_hinh: image_name || req.file.originalname,
        duong_dan: imageUrl,
        mo_ta: description || "",
        nguoi_dung_id: Number(userId),
      },
    });
  },

  async deleteImage(imageId, userId) {
    const image = await prisma.hinh_anh.findUnique({
      where: { hinh_id: Number(imageId) },
    });

    if (!image) throw new BadRequestError("Ảnh không tồn tại");
    if (image.nguoi_dung_id !== Number(userId)) {
      throw new BadRequestError("Bạn không có quyền xóa bức ảnh này");
    }

    await prisma.luu_anh.deleteMany({ where: { hinh_id: Number(imageId) } });

    await prisma.hinh_anh.delete({
      where: { hinh_id: Number(imageId) },
    });

    return null;
  },
};
