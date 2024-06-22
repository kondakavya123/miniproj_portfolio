//import { Request, Response } from 'express';
//import { validate } from 'class-validator';

// import { AppDataSource } from '../../../data-source';
// import { Answers } from '../../entity/Answer.entity';

// export class AnswerController {
//   getAllAnswers = async (req: Request, res: Response) => {
//     try {
//       const answersRepository = AppDataSource.getRepository(Answers);
//       const answers = await answersRepository
//         .createQueryBuilder('ans')
//         .getMany();

//       res.status(200).send({
//         success: true,
//         message: 'Thank you, all answers fetched.',
//         data: answers,
//       });
//     } catch (error) {
//       console.error(
//         `getAllAnswers error [${new Date().toString()}]:  ${error}`,
//       );
//       res.status(404).send({
//         success: false,
//         message: 'Error in answers fetch, please try after some time.',
//         data: [],
//       });
//     }
//   };

//   createAnswer = async (req: Request, res: Response) => {
//     const { QuestionID, Answer, ansScriptId } = req.body;
//     try {
//       const newAnswer = new Answers();

//       newAnswer.QuestionID = QuestionID;
//       newAnswer.Answer = Answer;
//       newAnswer.ansScriptId = ansScriptId;

//       const errors = await validate(newAnswer);
//       if (errors.length > 0) {
//         res.status(409).send({
//           success: false,
//           message: 'Answer details are invalid, please try correcting.',
//           data: {},
//         });
//         return;
//       }

//       await AppDataSource.manager.save(newAnswer);

//       res.status(200).send({
//         success: true,
//         message: 'Answer created successfully.',
//         data: newAnswer,
//       });
//     } catch (e) {
//       console.error(`createAnswer error [${new Date().toString()}]:  ${e}`);
//       const errorMessage =
//         'Server error, could not create Answer, please try after some time.';

//       res.status(409).send({
//         success: false,
//         message: errorMessage,
//         data: {},
//       });
//     }
//   };

//   updateAnswer = async (req: Request, res: Response) => {
//     const { QuestionID, Answer, ansScriptId } = req.body;
//     const answerId = req.params.answerId;
//     try {
//       const answersRepository = AppDataSource.getRepository(Answers);
//       const updatedAnswer = await answersRepository
//         .createQueryBuilder('ans')
//         .where('ans.id = :answerId', { answerId: answerId })
//         .getOneOrFail();

//       if (QuestionID) updatedAnswer.QuestionID = QuestionID;
//       if (Answer) updatedAnswer.Answer = Answer;
//       if (ansScriptId) updatedAnswer.ansScriptId = ansScriptId;

//       await AppDataSource.manager.save(updatedAnswer);

//       res.status(200).send({
//         success: true,
//         message: 'Thank you, answer updated successfully.',
//         data: updatedAnswer,
//       });
//     } catch (e) {
//       console.error(`updateAnswer error [${new Date().toString()}]:  ${e}`);
//       const errorMessage =
//         'Server error, could not update answer, please try after some time.';
//       res.status(409).send({
//         success: false,
//         message: errorMessage,
//         data: {},
//       });
//       return;
//     }
//   };
// }
