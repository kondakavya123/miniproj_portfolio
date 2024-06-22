import { Request, Response } from 'express';
import { AppDataSource } from '../../../data-source';
import { Student } from '../../entity/Student.entity';
import { StudentAnsScript } from '../../entity/StudentAnsScript.entity';
import { Course } from '../../entity/Course.entity';
import { Programme } from '../../entity/Programme.entity';
import { Document } from '../../entity/Document.entity';
import { Question } from '../../entity/Question.entity';
import { QuestionPaper } from '../../entity/QuestionPaper.entity';
import axios from 'axios';
import { Answers } from '../../entity/Answer.entity';

export class StudentController {
  getAllStudents = async (req: Request, res: Response) => {
    try {
      const studentRepository = AppDataSource.getRepository(Student);
      const students = await studentRepository.find();

      res.status(200).send({
        success: true,
        message: 'All students fetched successfully.',
        data: students,
      });
    } catch (error) {
      console.error(
        `getAllStudents error [${new Date().toString()}]:  ${error}`,
      );
      res.status(404).send({
        success: false,
        message: 'Error in fetching students, please try after sometime.',
        data: [],
      });
    }
  };

  verfyAnsScript = async (req: Request, res: Response) => {
    const { ansScriptId } = req.params;
    try {
      const repository = AppDataSource.getRepository(StudentAnsScript);
      const studentAnsScript = await repository
        .createQueryBuilder('val')
        .innerJoinAndSelect('val.student', 'student')
        .innerJoinAndSelect('val.ansDocument', 'ansDocument')
        .innerJoinAndSelect('val.course', 'course')
        .innerJoinAndSelect('val.programme', 'programme')
        .leftJoinAndSelect('val.answers', 'answers')
        .leftJoinAndSelect('answers.question', 'question')
        .where('val.id = :id', { id: ansScriptId })
        .getOneOrFail();

      studentAnsScript.isVerified = true;
      await repository.save(studentAnsScript);
      res.status(200).send({
        success: true,
        message: 'Students answer script verified successfully.',
        data: studentAnsScript,
      });
    } catch (error) {
      console.error(
        `verfyAnsScript error [${new Date().toString()}]:  ${error}`,
      );
      res.status(404).send({
        success: false,
        message:
          'Error in verifying Students answer script, please try after sometime.',
        data: [],
      });
    }
  };

  saveComment = async (req: Request, res: Response) => {
    const { comment, studentAnsScriptId } = req.body;
    try {
      const repository = AppDataSource.getRepository(StudentAnsScript);
      const studentAnsScript = await repository
        .createQueryBuilder('val')
        .innerJoinAndSelect('val.student', 'student')
        .innerJoinAndSelect('val.ansDocument', 'ansDocument')
        .innerJoinAndSelect('val.course', 'course')
        .innerJoinAndSelect('val.programme', 'programme')
        .leftJoinAndSelect('val.answers', 'answers')
        .leftJoinAndSelect('answers.question', 'question')
        .where('val.id =:id', { id: studentAnsScriptId })
        .getOneOrFail();

      studentAnsScript.comment = comment?.comment;
      await repository.save(studentAnsScript);
      res.status(200).send({
        success: true,
        message: 'Comment updated successfully.',
        data: studentAnsScript,
      });
    } catch (error) {
      console.error(`saveComment error [${new Date().toString()}]:  ${error}`);
      res.status(404).send({
        success: false,
        message: 'Error in updating comment, please try after sometime.',
        data: [],
      });
    }
  };

  getStudentAnsScriptByProgSemCourse = async (req: Request, res: Response) => {
    const { progId, courseId, sem } = req.params;
    try {
      const repository = AppDataSource.getRepository(StudentAnsScript);
      const studentAnsScript = await repository
        .createQueryBuilder('val')
        .innerJoinAndSelect('val.student', 'student')
        .innerJoinAndSelect('val.ansDocument', 'ansDocument')
        .innerJoinAndSelect('val.course', 'course')
        .innerJoinAndSelect('val.programme', 'programme')
        .leftJoinAndSelect('val.answers', 'answers')
        .leftJoinAndSelect('answers.question', 'question')
        .where('val.semester = :semester', { semester: sem })
        .andWhere('course.id = :courseId', { courseId: courseId })
        .andWhere('programme.id = :progId', { progId: progId })
        .getMany();

      res.status(200).send({
        success: true,
        message: 'Students answer script fetched successfully.',
        data: studentAnsScript,
      });
    } catch (error) {
      console.error(
        `getStudentAnsScriptByProgSemCourse error [${new Date().toString()}]:  ${error}`,
      );
      res.status(404).send({
        success: false,
        message:
          'Error in fetching Students answer script, please try after sometime.',
        data: [],
      });
    }
  };

  getStudentAnsScriptAndMarksDetails = async (req: Request, res: Response) => {
    const { progId, courseId, sem, studentId } = req.params;
    try {
      const repository = AppDataSource.getRepository(StudentAnsScript);
      const studentAnsScript = await repository
        .createQueryBuilder('val')
        .innerJoinAndSelect('val.student', 'student')
        .innerJoinAndSelect('val.ansDocument', 'ansDocument')
        .innerJoinAndSelect('val.course', 'course')
        .innerJoinAndSelect('val.programme', 'programme')
        .leftJoinAndSelect('val.answers', 'answers')
        .leftJoinAndSelect('answers.question', 'question')
        .where('val.semester = :semester', { semester: sem })
        .andWhere('course.id = :courseId', { courseId: courseId })
        .andWhere('programme.id = :progId', { progId: progId })
        .andWhere('student.id = :studentId', { studentId: studentId })
        .getMany();

      res.status(200).send({
        success: true,
        message: 'Students answer script and marks fetched successfully.',
        data: studentAnsScript,
      });
    } catch (error) {
      console.error(
        `getStudentAnsScriptAndMarksDetails error [${new Date().toString()}]:  ${error}`,
      );
      res.status(404).send({
        success: false,
        message:
          'Error in fetching Students answer script and marks, please try after sometime.',
        data: [],
      });
    }
  };

  extractAnsTextFromPdf = async (req: Request, res: Response) => {
    const { studentAnsScriptId } = req.params;
    try {
      const answersRepository = AppDataSource.getRepository(Answers);
      const repository = AppDataSource.getRepository(StudentAnsScript);
      const studentAnsScript = await repository
        .createQueryBuilder('val')
        .innerJoinAndSelect('val.ansDocument', 'ansDocument')
        .innerJoinAndSelect('val.student', 'student')
        .innerJoinAndSelect('val.course', 'course')
        .innerJoinAndSelect('val.programme', 'programme')
        .leftJoinAndSelect('val.answers', 'answers')
        .leftJoinAndSelect('answers.question', 'question')
        .where('val.id = :id', { id: studentAnsScriptId })
        .getOneOrFail();

      const qprepository = AppDataSource.getRepository(QuestionPaper);
      const questionPaper = await qprepository
        .createQueryBuilder('val')
        .innerJoinAndSelect('val.course', 'course')
        .innerJoinAndSelect('val.programme', 'programme')
        .innerJoinAndSelect('val.questions', 'questions')
        .where('val.semester = :semester', { semester: studentAnsScript?.semester })
        .andWhere('course.id = :courseId', { courseId: studentAnsScript?.course?.id })
        .andWhere('programme.id = :programmeId', { programmeId: studentAnsScript?.programme?.id })
        .getOneOrFail();

        // call text extraction api
        await axios.post(`${process.env.ML_SERVER_URL}/extract_answers`, { url: studentAnsScript?.ansDocument?.docUrl })
        .then(async (response: any) => {

          let pdfAnswers: Answers[] = [];
          // iterate on each question's answer and save to answer table 
          let mlAnswersArr = Object.keys(response.data).map((key) => [key, response.data[key]]);
          for(let i = 0; i < mlAnswersArr.length; i++) {
            const questionNum = mlAnswersArr[i][0];
            const ansText = mlAnswersArr[i][1];
            const question: Question = questionPaper?.questions.filter(q => {
              return q.question_no == Number(questionNum)
            })[0];

            const newAnswer = new Answers();
            newAnswer.obtainedMarks = 0;
            newAnswer.answer = ansText;
            newAnswer.question = question;
            await answersRepository.save(newAnswer);
            pdfAnswers.push(newAnswer);
          }


          // for (let key in response.data) {
          //   // console.log(typeof key, ' -key- ', key, ' ------------- ');
          //   const question: Question = questionPaper?.questions.filter(q => {
          //     return q.question_no == Number(key)
          //   })?.[0];
          //   // console.log( '------------question--------------------', question);
          //   // console.log(key, '------------response.data[key]--------------------', response.data[key]);
          //   if(response.data[key] && question) {
          //     console.log('----------------------------1---------------------');
          //     const newAnswer = new Answers();
          //     newAnswer.obtainedMarks = 0;
          //     newAnswer.answer = response.data[key];
          //     newAnswer.question = question;
          //     await answersRepository.save(newAnswer);
          //     pdfAnswers.push(newAnswer);
          //   }
          // }



          studentAnsScript.answers = pdfAnswers;
          await repository.save(studentAnsScript);
          res.status(200).send({
            success: true,
            message: 'Student answer script extracted successfully.',
            data: studentAnsScript,
          });

        }).catch((e: any) => {
          console.error(`extract_answers error [${new Date().toString()}]:  ${e}`);
        });
    } catch (error) {
      console.error(
        `extractAnsTextFromPdf error [${new Date().toString()}]:  ${error}`,
      );
      res.status(404).send({
        success: false,
        message:
          'Error in extracting Students answer script, please try after sometime.',
        data: [],
      });
    }
  };

  evaluateAnsAndAssingMarks = async (req: Request, res: Response) => {
    const { studentAnsScriptId } = req.params;
    try {
      const answersRepository = AppDataSource.getRepository(Answers);
      const repository = AppDataSource.getRepository(StudentAnsScript);
      const studentAnsScript = await repository
        .createQueryBuilder('val')
        .innerJoinAndSelect('val.student', 'student')
        .innerJoinAndSelect('val.ansDocument', 'ansDocument')
        .innerJoinAndSelect('val.course', 'course')
        .innerJoinAndSelect('val.programme', 'programme')
        .leftJoinAndSelect('val.answers', 'answers')
        .leftJoinAndSelect('answers.question', 'question')
        .where('val.id = :id', { id: studentAnsScriptId })
        .getOneOrFail();

        // console.log(studentAnsScriptId, '-----studentAnsScript---studentAnsScript----', studentAnsScript?.answers);
        // loop on each answer and save back with marks
        // studentAnsScript?.answers.
        studentAnsScript?.answers.forEach(async (answer) => {
          
        // call answer evaluate api
        await axios.post(`${process.env.ML_SERVER_URL}/evaluate_answer`, { answerKey: answer?.question?.masterAns, studentAnswer: answer?.answer })
        .then(async (response: any) => {
          // console.log('answer text---', response.data);
          // console.log('answer ---', answer);
          answer.obtainedMarks = response.data * 100; // convert to percentage
          await answersRepository.save(answer);

          let pdfAnswers: Answers[] = [];
          // iterate on each question's answer and save to answer table 
          // for (let key in response.data) {
          //   const newAnswer = new Answers();
          //   newAnswer.answer = response.data[key];

          //   await answersRepository.save(newAnswer); 
          //   pdfAnswers.push(newAnswer);
          // }
          // studentAnsScript.answers = pdfAnswers;
          // await answersRepository.save(studentAnsScript);
          

        }).catch((e: any) => {
          console.error(`extract_answers error [${new Date().toString()}]:  ${e}`);
        });
      });
      res.status(200).send({
        success: true,
        message: 'Student answer script extracted successfully.',
        data: studentAnsScript,
      });
    } catch (error) {
      console.error(
        `extractAnsTextFromPdf error [${new Date().toString()}]:  ${error}`,
      );
      res.status(404).send({
        success: false,
        message:
          'Error in extracting Students answer script, please try after sometime.',
        data: [],
      });
    }
  };

  saveAnswerScriptAndQuestions = async (req: Request, res: Response) => {
    try {
      const {
        ansScriptUploadIds,
        courseId,
        programmeId,
        semester,
        totalMarks,
        questions,
      } = req.body;
      const studentRepository = AppDataSource.getRepository(Student);
      const studentAnsScriptRepository =
        AppDataSource.getRepository(StudentAnsScript);
      const courserepository = AppDataSource.getRepository(Course);
      const progRepository = AppDataSource.getRepository(Programme);
      const docRepository = AppDataSource.getRepository(Document);
      const questionRepository = AppDataSource.getRepository(Question);
      const questionPaperRepository =
        AppDataSource.getRepository(QuestionPaper);

      // save ans script
      let studentAnsScriptList: StudentAnsScript[] = [];
      const courseDb = await courserepository
        .createQueryBuilder('val')
        .where('val.id = :id', {
          id: courseId,
        })
        .getOneOrFail();

      const programmeDb = await progRepository
        .createQueryBuilder('val')
        .where('val.id = :id', {
          id: programmeId,
        })
        .getOneOrFail();
      if (ansScriptUploadIds?.length > 0) {
        for (let i = 0; i < ansScriptUploadIds.length; i++) {
          const studentAnsScript = new StudentAnsScript();
          const ansScriptDocDb = await docRepository
            .createQueryBuilder('val')
            .where('val.id = :id', {
              id: ansScriptUploadIds[i],
            })
            .getOneOrFail();

          const studentDb = await studentRepository
            .createQueryBuilder('val')
            .where('val.regNumber = :regNumber', {
              regNumber: ansScriptDocDb.fileName.split('.')[0],
            })
            .getOneOrFail();

          studentAnsScript.isVerified = false;
          studentAnsScript.isSentForReEval = false;
          studentAnsScript.semester = semester;
          studentAnsScript.course = courseDb;
          studentAnsScript.programme = programmeDb;
          studentAnsScript.ansDocument = ansScriptDocDb;
          studentAnsScript.student = studentDb;
          await studentAnsScriptRepository.save(studentAnsScript);
          studentAnsScriptList.push(studentAnsScript);
        }
      }

      // save questions
      let questionList: Question[] = [];
      // Loop through the questions array and save each question
      for (const question of questions) {
        const newQuestion = new Question();
        newQuestion.masterAns = question.masterAns;
        newQuestion.maxMarks = question.maxMarks;
        newQuestion.question_desc = question.question_desc;
        newQuestion.question_no = question.question_no;

        await questionRepository.save(newQuestion);
        questionList.push(newQuestion);
      }
      const questionPaper = new QuestionPaper();
      questionPaper.totalMarks = totalMarks;
      questionPaper.semester = semester;
      questionPaper.course = courseDb;
      questionPaper.programme = programmeDb;
      questionPaper.questions = questionList;

      await questionPaperRepository.save(questionPaper);

      res.status(200).send({
        success: true,
        message: 'Students ans script and questions saved successfully.',
        data: { questionPaper, studentAnsScriptList },
      });
    } catch (error) {
      console.error(
        `saveAnswerScriptAndQuestions error [${new Date().toString()}]:  ${error}`,
      );
      res.status(404).send({
        success: false,
        message:
          'Error in saving students ans script and questions, please try after sometime.',
        data: [],
      });
    }
  };
}
