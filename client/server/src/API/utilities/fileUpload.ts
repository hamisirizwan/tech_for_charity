import multer from "multer";
import { Request } from 'express';

const fileStorageEngine = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
    cb(null, "Files");
  },
  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: fileStorageEngine,
  // fileFilter: (req: Request, file: Express.Multer.File, cb: (error: Error | null, acceptFile: boolean) => void) => {
  //   if (file.fieldname === "image" && !file.mimetype.startsWith("image/")) {
  //     return cb(new Error("Only image files are allowed for the image field!"), false);
  //   }
  //   cb(null, true);
  // },
});

export default upload;
