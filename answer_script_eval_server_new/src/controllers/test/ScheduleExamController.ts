import { Request, Response } from 'express';
import { AppDataSource } from '../../../data-source';
import { ExamSchedule } from '../../entity/ExamSchedule.entity';
import { StudentTakingExam } from '../../entity/StudentTakingExam.entity';
import { Programme } from '../../entity/Programme.entity';
import { Course } from '../../entity/Course.entity';
import { Student } from '../../entity/Student.entity';
import { Users } from '../../entity/Users.entity';
import { FACULTY } from '../../constants/constants';

export class ScheduleExamController {
  scheduleExam = async (req: Request, res: Response) => {
    try {
      const {
        selectedDate,
        semester,
        regularstudents,
        supplestudents,
        program,
        course,
        faculty,
      } = req.body;

      const facultyrepository = AppDataSource.getRepository(Users);
      const faculties = await facultyrepository
        .createQueryBuilder('val')
        .innerJoinAndSelect('val.role', 'role')
        .where('val.id IN(:ids)', { ids: faculty })
        .andWhere('role.role = :roleName', { roleName: FACULTY })
        .getMany();

      const progrePository = AppDataSource.getRepository(Programme);
      const programmes = await progrePository
        .createQueryBuilder('val')
        .leftJoinAndSelect('val.departments', 'departments')
        .where('val.id IN(:ids)', { ids: program })
        .getMany();

      const Courserepository = AppDataSource.getRepository(Course);
      const courseDb = await Courserepository.createQueryBuilder('val')
        .where('val.id = :id', {
          id: course,
        })
        .getOneOrFail();

      const regstudrepository = AppDataSource.getRepository(Student);
      const regstuds = await regstudrepository
        .createQueryBuilder('val')
        .leftJoinAndSelect('val.programme', 'programme')
        .where('val.id IN(:ids)', { ids: regularstudents })
        .getMany();

      const supplystudrepository = AppDataSource.getRepository(Student);
      const supplystuds = await supplystudrepository
        .createQueryBuilder('val')
        .leftJoinAndSelect('val.programme', 'programme')
        .where('val.id IN(:ids)', { ids: supplestudents })
        .getMany();

      const examScheduleRepository = AppDataSource.getRepository(ExamSchedule);
      const studentTakingExamRepository =
        AppDataSource.getRepository(StudentTakingExam);

      const newExamSchedule = new ExamSchedule();
      newExamSchedule.monAndYear = selectedDate;
      newExamSchedule.programmes = programmes;
      newExamSchedule.semester = semester;
      newExamSchedule.courseInfo = courseDb;
      newExamSchedule.faculties = faculties;

      const newStudTakExam = new StudentTakingExam();
      newStudTakExam.monAndYear = selectedDate;
      newStudTakExam.semester = semester;
      newStudTakExam.course = courseDb;
      newStudTakExam.programmes = programmes;
      newStudTakExam.faculties = faculties;
      newStudTakExam.regularStudents = regstuds;
      newStudTakExam.supplementaryStudents = supplystuds;

      // Save StudentTakingExam to the database
      await studentTakingExamRepository.save(newStudTakExam);

      // Save StudentTakingExam to the database
      await examScheduleRepository.save(newExamSchedule);

      // Respond with a success message or any necessary data
      res.status(201).send({
        success: true,
        message: 'Exam scheduled successfully.',
        data: {
          examSchedule: newExamSchedule,
          studentTakingExam: newStudTakExam,
        },
      });
    } catch (error) {
      console.error(`scheduleExam error [${new Date().toString()}]:  ${error}`);
      res.status(500).send({
        success: false,
        message: 'Internal Server Error',
        data: [],
      });
    }
  };

  getScheduledExamByProgramAndSemester = async (
    req: Request,
    res: Response,
  ) => {
    try {
      const programmeId = req.params.programmeId;
      const semester = req.params.semester;

      const studentTakingExamRepository =
        AppDataSource.getRepository(StudentTakingExam);
      const scheduledExamsAndStudents = await studentTakingExamRepository
        .createQueryBuilder('val')
        .innerJoinAndSelect('val.course', 'course')
        .innerJoinAndSelect('val.programmes', 'programmes')
        .innerJoinAndSelect('val.faculties', 'faculties')
        .innerJoinAndSelect('val.regularStudents', 'regularStudents')
        .innerJoinAndSelect(
          'val.supplementaryStudents',
          'supplementaryStudents',
        )
        .where('programmes.id =:programmeId', { programmeId: programmeId })
        .andWhere('val.semester = :semester', { semester: semester })
        .getMany();

      // const examScheduleRepository = AppDataSource.getRepository(ExamSchedule);
      // const examSchedules = await examScheduleRepository
      //   .createQueryBuilder('val')
      //   .innerJoinAndSelect('val.programmes', 'programmes')
      //   .innerJoinAndSelect('val.courseInfo', 'courseInfo')
      //   .innerJoinAndSelect('val.faculties', 'faculties')
      //   .where('programmes.id =:programmeId', { programmeId: programmeId })
      //   .andWhere('val.semester = :semester', { semester: semester })
      //   .getMany();

      res.status(200).send({
        success: true,
        message: 'Sheduled exams and students fetched successfully.',
        data: scheduledExamsAndStudents,
      });
    } catch (error) {
      console.error(
        `getScheduledExamByProgramAndSemester error [${new Date().toString()}]:  ${error}`,
      );
      res.status(404).send({
        success: false,
        message:
          'Error in fetching scheduled exam and students, please try after sometime.',
        data: [],
      });
    }
  };
}
