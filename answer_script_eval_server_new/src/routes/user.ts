import { Router } from 'express';
import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';

export class UserRoutes {
  public router: Router;
  public userController: UserController = new UserController();
  public authController: AuthController = new AuthController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post('/register', this.userController.registerUser);
    this.router.post('/login', this.authController.login);
    this.router.post('/current', this.authController.getCurrentUser);
  }
}
