import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { Programme } from '../entity/Programme.entity';
import { Course } from '../entity/Course.entity';
import { Users } from '../entity/Users.entity';
import { Department } from '../entity/Department.entity';
import { In } from 'typeorm';

class CourseController {
  private courseRepository = AppDataSource.getRepository(Course);

  getCoursesByProgramAndSem = async (req: Request, res: Response) => {
    try {
      const { programId, sem } = req.params;

      // Assuming you have a valid programId and sem, you can fetch courses
      const courses = await AppDataSource.getRepository(Course)
        .createQueryBuilder('course')
        .innerJoinAndSelect('course.programmes', 'programme')
        .where('programme.id = :programId', { programId })
        .andWhere('course.sem = :sem', { sem })
        .getMany();

      res.status(200).send({
        success: true,
        message: 'Courses fetched successfully.',
        data: courses,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  };

  getAllCourses = async (_req: Request, res: Response) => {
    try {
      const courses = await this.courseRepository.find({
        relations: ['department', 'programmes', 'faculties'],
      });
      res.status(200).send({
        success: true,
        message: 'Courses fetched successfully.',
        data: courses,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        success: false,
        message: 'Error in courses fetch.',
        data: [],
      });
    }
  };

  getCourseById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    try {
      // console.log('Query:', this.courseRepository.createQueryBuilder().where({ id: id }).getSql())
      const course = await this.courseRepository.findOne({
        relations: ['department', 'programmes', 'faculties'],
        where: { id: id },
      });

      if (!course) {
        return res.status(404).send({
          success: false,
          message: 'Course not found',
          data: {},
        });
      }

      res.status(200).send({
        success: true,
        message: 'Course fetched successfully.',
        data: { course },
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        success: false,
        message: 'Error in course fetch.',
        data: {},
      });
    }
  };

  createCourse = async (req: Request, res: Response) => {
    const {
      subjectName,
      examType,
      markingScheme,
      departmentId,
      programmeIds,
      facultyIds,
    } = req.body;

    try {
      const course = new Course();
      course.subjectName = subjectName;
      course.examType = examType;
      course.markingScheme = markingScheme;

      // Associate with Department
      // const department =
      //   await AppDataSource.getRepository(Department).findOne(departmentId);
      const department = await AppDataSource.getRepository(Department).find({
        where: { id: In(departmentId) },
      });
      //const department = await AppDataSource.getRepository(Department).find({
      // where: { id: In(departmentId) } as FindOptionsWhere<Department>,
      // });

      // if (department) course.department = department;

      // Associate with Programmes
      const programmes = await AppDataSource.getRepository(Programme).find({
        where: { id: In(programmeIds) },
      });
      if (programmes.length > 0) course.programmes = programmes;

      // Associate with Faculties
      const faculties = await AppDataSource.getRepository(Users).find({
        where: { id: In(facultyIds) },
      });
      if (faculties.length > 0) course.faculties = faculties;

      await this.courseRepository.save(course);

      res.status(201).send({
        success: true,
        message: 'Course created successfully.',
        data: course,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        success: false,
        message: 'Error in course creation.',
        data: {},
      });
    }
  };

  updateCourse = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const {
      subjectName,
      examType,
      markingScheme,
      departmentId,
      programmeIds,
      facultyIds,
    } = req.body;

    try {
      const course = await this.courseRepository.findOne({ where: { id: id } });
      if (!course) {
        return res.status(404).send({
          success: false,
          message: 'Course not found',
          data: {},
        });
      }

      course.subjectName = subjectName || course.subjectName;
      course.examType = examType || course.examType;
      course.markingScheme = markingScheme || course.markingScheme;

      // Associate with Department
      if (departmentId) {
        const department =
          await AppDataSource.getRepository(Department).findOne(departmentId);
        if (department) course.department = department;
      }

      // Associate with Programmes
      if (programmeIds) {
        const programmes = await AppDataSource.getRepository(Programme).find({
          where: { id: In(programmeIds) },
        });
        if (programmes.length > 0) course.programmes = programmes;
      }

      // Associate with Faculties
      if (facultyIds) {
        const faculties = await AppDataSource.getRepository(Users).find({
          where: { id: In(facultyIds) },
        });
        if (faculties.length > 0) course.faculties = faculties;
      }

      await this.courseRepository.save(course);

      res.status(200).send({
        success: true,
        message: 'Course updated successfully.',
        data: course,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        success: false,
        message: 'Error in course update.',
        data: {},
      });
    }
  };

  deleteCourse = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    try {
      const course = await this.courseRepository.findOne({ where: { id: id } });

      if (!course) {
        return res.status(404).send({
          success: false,
          message: 'Course not found',
          data: {},
        });
      }

      await this.courseRepository.remove(course);

      res.status(200).send({
        success: true,
        message: 'Course deleted successfully.',
        data: {},
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        success: false,
        message: 'Error in course deletion.',
        data: {},
      });
    }
  };
}

export default CourseController;
