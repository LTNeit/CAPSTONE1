import path from "path";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";

export const userService = {
  async getInfo(req) {
    const userId = req.user?.nguoi_dung_id;

    const user = await prisma.nguoi_dung.findUnique({
      where: { nguoi_dung_id: Number(userId) },
    });
    return user;
  },

  async updateProfile(req) {
    const userId = req.user?.nguoi_dung_id;
    const { ho_ten, tuoi, email } = req.body;

    const updatedUser = await prisma.nguoi_dung.update({
      where: { nguoi_dung_id: Number(userId) },
      data: {
        ho_ten: ho_ten,
        tuoi: tuoi ? Number(tuoi) : undefined,
        email: email,
      },
    });
    return updatedUser;
  },

  async saveImage(req) {
    const userId = req.user?.nguoi_dung_id;
    const { hinh_id } = req.body;

    if (!hinh_id) throw new BadRequestError("Vui lòng cung cấp hinh_id");

    const isExist = await prisma.luu_anh.findUnique({
      where: {
        nguoi_dung_id_hinh_id: {
          nguoi_dung_id: Number(userId),
          hinh_id: Number(hinh_id),
        },
      },
    });

    if (isExist) throw new BadRequestError("Bạn đã lưu hình ảnh này rồi");

    return await prisma.luu_anh.create({
      data: {
        nguoi_dung_id: Number(userId),
        hinh_id: Number(hinh_id),
        ngay_luu: new Date(),
      },
    });
  },

  async deleteSavedImage(req) {
    const userId = req.user?.nguoi_dung_id;
    const { hinhId } = req.params;

    await prisma.luu_anh.delete({
      where: {
        nguoi_dung_id_hinh_id: {
          nguoi_dung_id: Number(userId),
          hinh_id: Number(hinhId),
        },
      },
    });
    return null;
  },

  async getSavedImagesByUserId(userId) {
    const records = await prisma.luu_anh.findMany({
      where: { nguoi_dung_id: Number(userId) },
      include: {
        hinh_anh: true,
      },
    });

    return records.map((r) => r.hinh_anh);
  },

  async avatarLocal(req) {
    const userId = req.user?.nguoi_dung_id;
    if (!req.file) throw new BadRequestError(`File is required`);

    const user = await prisma.nguoi_dung.findUnique({
      where: { nguoi_dung_id: Number(userId) },
    });

    if (user?.anh_dai_dien) {
      const oldFilePath = path.join("public/images", user.anh_dai_dien);
      if (fs.existsSync(oldFilePath)) fs.unlinkSync(oldFilePath);
    }

    await prisma.nguoi_dung.update({
      where: { nguoi_dung_id: Number(userId) },
      data: { anh_dai_dien: req.file.filename },
    });

    return `http://localhost:3069/images/${req.file.filename}`;
  },

  async avatarCloud(req) {
    const userId = req.user?.nguoi_dung_id;
    if (!req.file) throw new BadRequestError(`File is required`);

    const user = await prisma.nguoi_dung.findUnique({
      where: { nguoi_dung_id: Number(userId) },
    });
    if (user?.anh_dai_dien) {
      cloudinary.uploader.destroy(user.anh_dai_dien);
    }

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "node_55" }, (error, result) => {
          if (error) return reject(error);
          return resolve(result);
        })
        .end(req.file.buffer);
    });

    await prisma.nguoi_dung.update({
      where: { nguoi_dung_id: Number(userId) },
      data: { anh_dai_dien: uploadResult.public_id },
    });

    return uploadResult.secure_url;
  },
};
