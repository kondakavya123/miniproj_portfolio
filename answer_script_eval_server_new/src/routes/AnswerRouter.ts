// import { Router } from 'express';
// import { AlumniController } from '../controllers/test/AlumniController';

// export class TestRoutes {
//   public router: Router;
//   public alumniController: AlumniController = new AlumniController();

//   constructor() {
//     this.router = Router();
//     this.routes();
//   }

//   routes() {
//     this.router.get('/test', this.alumniController.getAllAlumni);
//     this.router.put('/test/:alumniId', this.alumniController.updateAlumni);
//     this.router.post('/test', this.alumniController.createAlumni);
//   }
// }

// import { Router } from "express";
// import { AnswerController } from "../controllers/test/AnswerController";

// export class TestRoutes {
//   public router: Router;
//   public answerController: AnswerController = new AnswerController();

//   constructor() {
//     this.router = Router();
//     this.routes();
//   }

//   routes() {
//     this.router.get("/test/answers", this.answerController.getAllAnswers);
//     this.router.put(
//       "/test/answers/:answerId",
//       this.answerController.updateAnswer,
//     );
//     this.router.post("/test/answers", this.answerController.createAnswer);
//   }
// }
