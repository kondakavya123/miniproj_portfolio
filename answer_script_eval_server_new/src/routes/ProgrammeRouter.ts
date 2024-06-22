import { Router } from 'express';
import { ProgrammeController } from '../controllers/test/ProgrammeController';

export class ProgrammeRoutes {
  public router: Router;
  public programmeController: ProgrammeController = new ProgrammeController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/programmes', this.programmeController.getAllProgrammes);
    // Add other routes if needed
  }
}
