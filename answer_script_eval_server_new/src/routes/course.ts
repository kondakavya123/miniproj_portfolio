import { Router } from 'express';
import CourseController from '../controllers/courseController';

export class CourseRoutes {
  public router: Router;
  public courseController: CourseController = new CourseController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/courses', this.courseController.getAllCourses);
    // this.router.get('/courses/:programmeId/:sem', this.courseController.getAllCourses);
    this.router.get(
      '/courses/program/:programId/sem/:sem',
      this.courseController.getCoursesByProgramAndSem,
    );
    this.router.get('/courses/:id', this.courseController.getCourseById);
    this.router.get(
      '/courses/program/:programId/sem/:sem',
      this.courseController.getCoursesByProgramAndSem,
    );
    this.router.post('/courses', this.courseController.createCourse);
    this.router.put('/courses/:id', this.courseController.updateCourse);
    this.router.delete('/courses/:id', this.courseController.deleteCourse);
  }
}
