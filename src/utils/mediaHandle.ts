import { diskStorage } from 'multer';

export const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const filename = file.originalname.split('.')[0];
    const fileExtName = file.originalname.split('.')[1];
    cb(null, `${filename}-${Date.now()}.${fileExtName}`);
  },
});
