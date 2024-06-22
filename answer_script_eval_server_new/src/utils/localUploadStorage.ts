import { Request } from 'express';
const util = require('util');
const multer = require('multer');
import { v4 as uuidv4 } from 'uuid';

const maxSize = 2 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: (req: Request, file: any, cb: any) => {
    cb(null, './uploads');
  },
  filename: (req: Request, file: any, cb: any) => {
    const { originalname } = file;
    // console.log("originalname=====", `${uuidv4()}-${originalname}`);
    cb(null, `${uuidv4()}-${originalname}`);
  },
});

const fileFilter = (req: Request, file: any, cb: any) => {
  if (
    file.mimetype.split('/')[0] === 'image' ||
    file.mimetype.split('/')[1] === 'pdf'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Upload file type is not supported.'), false);
  }
};

const uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: fileFilter,
}).single('file');

const uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
