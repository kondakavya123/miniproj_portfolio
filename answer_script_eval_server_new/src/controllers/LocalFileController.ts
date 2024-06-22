import { Request, Response } from 'express';
import { validate } from 'class-validator';
const localUploadStorage = require('../utils/localUploadStorage');

import { AppDataSource } from '../../data-source';
import { Document } from '../entity/Document.entity';

export class LocalFileController {
  uploadFile = async (req: Request, res: Response) => {
    const docId = req.params.docId;
    try {
      await localUploadStorage(req, res);
      let document;
      const serverPort =
        process.env.SERVER_PORT === '80' ? '' : `:${process.env.SERVER_PORT}`;
      if (
        docId === undefined ||
        docId === 'undefined' ||
        docId === null ||
        docId === 'null' ||
        docId === '-1'
      ) {
        // create new record
        document = new Document(
          `${req.protocol}://${req.hostname}${serverPort}/${
            req.file!.filename
          }`,
          req.file!.originalname,
        );
        await validate(document);
        await AppDataSource.manager.save(document);
      } else if (docId === 'directory-upload') {
        // check if file name already exists
        const documentRepository = AppDataSource.getRepository(Document);
        const document = await documentRepository
          .createQueryBuilder('doc')
          .where('doc.fileName = :fileName', {
            fileName: req.file!.originalname,
          })
          .getOne();
        if (document !== null) {
          res.status(409).send({
            success: false,
            message: `Already file with same name - "${
              req.file!.originalname
            }" exists.`,
            data: {},
          });
          return;
        } else {
          const document = new Document(
            `${req.protocol}://${req.hostname}${serverPort}/${
              req.file!.filename
            }`,
            req.file!.originalname,
          );
          const errors = await validate(document);
          if (errors.length > 0) {
            res.status(400).send({
              success: false,
              message: errors,
              data: {},
            });
            return;
          }
          await AppDataSource.manager.save(document);
          res.status(200).send({
            success: true,
            message: `File - ${
              req.file!.originalname
            } uploaded and saved to database.`,
            data: document,
          });
          return;
        }
      } else {
        // else update existing doc
        document = await AppDataSource.manager.findOneByOrFail(Document, {
          id: Number(docId),
        });
        document.docUrl = `${req.protocol}://${req.hostname}${serverPort}/${
          req.file!.filename
        }`;
        document.fileName = req.file!.originalname;
        await AppDataSource.manager.save(document);
      }
      res.status(200).send({
        success: true,
        message: 'File uploaded and saved to database.',
        data: document,
      });
    } catch (e) {
      res.status(409).send({
        success: false,
        message: 'Error in uploading file.',
        data: {},
      });
      return;
    }
  };
}
