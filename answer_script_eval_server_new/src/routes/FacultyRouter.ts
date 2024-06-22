import { Router } from 'express';
import { FacultyController } from '../controllers/test/FacultyController';

export class FacultyRoutes {
  public router: Router;
  public facultyController: FacultyController = new FacultyController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/faculty', this.facultyController.getFacultyDetails);
    // Add other routes if needed
  }
}
