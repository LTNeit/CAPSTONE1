import multer from "multer";
import path from "node:path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/");
  },
  filename: function (req, file, cb) {
    //lấy phần đuôi của file
    const fileExt = path.extname(file.originalname);
    //tạo random cho tên file tránh trùng lặp tên file
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "local" + "-" + uniqueSuffix + fileExt);
  },
});

export const uploadDiskStorage = multer({ storage: storage });
//http://localhost:3069/images/local-1780573961661-915426042.webp
