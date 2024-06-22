/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { LocalFileController } from '../controllers/LocalFileController';

export class DocumentRoutes {
  public router: Router;
  public localFileController: LocalFileController = new LocalFileController();


  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post('/upload/:docId', this.localFileController.uploadFile);
  }
}