import { BadRequestError } from "../common/helpers/exception.helper.js";
import {
  signAccessToken,
  signRefreshToken,
} from "../common/helpers/jwt.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";
import bcrypt from "bcrypt";

export const authService = {
  async login(req) {
    const { email, password } = req.body;

    const existingUser = await prisma.nguoi_dung.findFirst({
      where: { email: email },
    });

    if (!existingUser) {
      throw new BadRequestError(`Người dùng không tồn tại, vui lòng đăng ký`);
    }

    const isPasswordValid = bcrypt.compareSync(password, existingUser.mat_khau);
    if (!isPasswordValid) {
      throw new BadRequestError(
        `Thông tin người dùng không đúng, vui lòng thử lại`,
      );
    }

    const payload = {
      nguoi_dung_id: existingUser.nguoi_dung_id,
      email: existingUser.email,
    };

    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    return { accessToken, refreshToken };
  },

  async register(req) {
    const { email, password, fullname } = req.body;

    const existingUser = await prisma.nguoi_dung.findFirst({
      where: { email: email },
    });

    if (existingUser) {
      throw new BadRequestError(`Người dùng đã tồn tại, vui lòng đăng nhập`);
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    await prisma.nguoi_dung.create({
      data: {
        email: email,
        mat_khau: hashPassword,
        ho_ten: fullname,
      },
    });

    return true;
  },
};
