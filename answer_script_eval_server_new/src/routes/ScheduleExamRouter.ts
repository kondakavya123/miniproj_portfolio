import { Router } from 'express';
import { ScheduleExamController } from '../controllers/test/ScheduleExamController';

export class ScheduleExamRoutes {
  public router: Router;
  public scheduleExamController: ScheduleExamController =
    new ScheduleExamController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    // Assuming you have a POST endpoint for scheduling exams
    this.router.post(
      '/schedule-exam',
      this.scheduleExamController.scheduleExam,
    );
    this.router.get(
      '/scheduled-exam/:programmeId/:semester',
      this.scheduleExamController.getScheduledExamByProgramAndSemester,
    );
  }
}
