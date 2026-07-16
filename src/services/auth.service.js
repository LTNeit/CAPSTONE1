import { BadRequestError } from "../common/helpers/exception.helper.js";
import {
  signAccessToken,
  signRefreshToken,
} from "../common/helpers/jwt.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";
import bcrypt from "bcrypt";

export const authService = {
async login(req) {
    // 1. Nhận email và password từ Postman gửi lên
    const { email, password } = req.body;

    // 2. Tìm user và ép Prisma lấy trường mat_khau bằng cấu hình select
    const existingUser = await prisma.nguoi_dung.findFirst({
      where: {
        email: email,
      },
      select: {
        nguoi_dung_id: true,
        email: true,
        mat_khau: true, // Lấy mật khẩu đã hash từ DB ra để đối chiếu
        ho_ten: true,
        tuoi: true,
      },
    });

    if (!existingUser) {
      throw new BadRequestError(`Người dùng không tồn tại, vui lòng đăng ký`);
    }

    // 3. Sửa lại chữ mat_khau thành password ở đây để không bị crash lỗi ReferenceError nữa
    console.log(" Mật khẩu từ Postman gửi lên:", password);
    console.log(" Mật khẩu lấy từ Database ra:", existingUser?.mat_khau);

    // 4. So sánh password (từ postman) và existingUser.mat_khau (từ database)
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
    const { email, password, fullname, age } = req.body;

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
        tuoi: Number(age),
      },
    });

    return true;
  },
};
