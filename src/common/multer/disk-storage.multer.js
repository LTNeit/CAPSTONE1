import multer from "multer";
import path from "node:path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const userId = req.user?.nguoi_dung_id || "unknown";
    let folderType = "posts";
    
    if (file.fieldname === "avatar") {
      folderType = "avatar";
    } else if (file.fieldname === "comment") {
      folderType = "comment";
    } else if (file.fieldname === "image" || file.fieldname === "post") {
      folderType = "posts";
    }
    const userFolderPath = path.join(process.cwd(), "public/images/users", userId.toString(), folderType);

    if (!fs.existsSync(userFolderPath)) {
      fs.mkdirSync(userFolderPath, { recursive: true });
    }

    cb(null, userFolderPath);
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "local" + "-" + uniqueSuffix + fileExt);
  },
});

export const uploadDiskStorage = multer({ storage: storage });