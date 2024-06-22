import { Router } from 'express';
import { StudentController } from '../controllers/test/StudentController';

export class StudentRoutes {
  public router: Router;
  public studentController: StudentController = new StudentController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/students', this.studentController.getAllStudents);
    this.router.put(
      '/verify/:ansScriptId',
      this.studentController.verfyAnsScript,
    );
    this.router.put('/save-comment', this.studentController.saveComment);
    this.router.get(
      '/student-ans-script/:progId/:courseId/:sem',
      this.studentController.getStudentAnsScriptByProgSemCourse,
    );
    this.router.get(
      '/student-ans-marks/:progId/:courseId/:sem/:studentId',
      this.studentController.getStudentAnsScriptAndMarksDetails,
    );
    this.router.post(
      '/q-ans-script',
      this.studentController.saveAnswerScriptAndQuestions,
    );
    this.router.get('/extract/:studentAnsScriptId', this.studentController.extractAnsTextFromPdf);
    this.router.get('/evaluate/:studentAnsScriptId', this.studentController.evaluateAnsAndAssingMarks);
  }
}
