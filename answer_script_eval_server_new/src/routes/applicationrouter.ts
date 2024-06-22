import { Router } from 'express';
import { UserRoutes } from './user';
import { CourseRoutes } from './course';
import { ProgrammeRoutes } from './ProgrammeRouter';
import { StudentRoutes } from './StudentRouter';
import { FacultyRoutes } from './FacultyRouter';
import { ScheduleExamRoutes } from './ScheduleExamRouter';
import { DocumentRoutes } from './document';

export class ApplicationRoutes {
  public router: Router;
  private userRoutes: UserRoutes;
  private programmeRoutes: ProgrammeRoutes;
  private studentRoutes: StudentRoutes;
  private facultyRoutes: FacultyRoutes;
  private courseRoutes: CourseRoutes;
  private scheduleExamRoutes: ScheduleExamRoutes;
  private documentRoutes: DocumentRoutes;

  constructor() {
    this.router = Router();
    this.userRoutes = new UserRoutes();
    this.programmeRoutes = new ProgrammeRoutes();
    this.studentRoutes = new StudentRoutes();
    this.facultyRoutes = new FacultyRoutes();
    this.courseRoutes = new CourseRoutes();
    this.scheduleExamRoutes = new ScheduleExamRoutes();
    this.documentRoutes = new DocumentRoutes();

    this.routes();
  }

  routes() {
    this.router.use('/', this.userRoutes.router);
    this.router.use('/', this.programmeRoutes.router);
    this.router.use('/', this.studentRoutes.router);
    this.router.use('/', this.facultyRoutes.router);
    this.router.use('/', this.courseRoutes.router);
    this.router.use('/', this.scheduleExamRoutes.router);
    this.router.use('/', this.documentRoutes.router);
  }
}
