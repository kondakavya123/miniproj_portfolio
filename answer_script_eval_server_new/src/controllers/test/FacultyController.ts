import { Request, Response } from 'express';
import { AppDataSource } from '../../../data-source';
import { Users } from '../../entity/Users.entity';
import { FACULTY } from '../../constants/constants';

export class FacultyController {
  getFacultyDetails = async (req: Request, res: Response) => {
    try {
      // const facultyRepository = AppDataSource.getRepository(Users);
      // const facultyDetails = await facultyRepository.find();

      const userRepository = AppDataSource.getRepository(Users);
      const facultyDetails = await userRepository
        .createQueryBuilder('val')
        .innerJoinAndSelect('val.role', 'role')
        .innerJoinAndSelect('val.department', 'department')
        .leftJoinAndSelect('val.programmes', 'programmes')
        .where('role.role = :role', { role: FACULTY })
        .getMany();

      res.status(200).send({
        success: true,
        message: 'Faculty details fetched successfully.',
        data: facultyDetails,
      });
    } catch (error) {
      console.error(
        `getFacultyDetails error [${new Date().toString()}]:  ${error}`,
      );
      res.status(404).send({
        success: false,
        message:
          'Error in fetching faculty details, please try after sometime.',
        data: [],
      });
    }
  };
}
