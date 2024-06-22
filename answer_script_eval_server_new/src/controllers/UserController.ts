import { Request, Response } from 'express';
import { validate } from 'class-validator';

import { AppDataSource } from '../../data-source';

import { Users } from '../entity/Users.entity';
import { UserRole } from '../entity/UserRole.entity';
import { In } from 'typeorm';
import { Department } from '../entity/Department.entity';
import { ER_DUP_ENTRY, ADMIN, FACULTY } from '../constants/constants';
import { getRolesFromRequestObj } from '../middlewares/checkRole';

// function sleep(ms: any) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

export class UserController {
  searchUserOrFacultyListByName = async (req: Request, res: Response) => {
    const name = req.params.name;
    try {
      const userRepository = AppDataSource.getRepository(Users);
      const userOrFacultyList = await userRepository
        .createQueryBuilder('u')
        .where('firstName like :firstName', {
          firstName: `%${name}%`,
        })
        .getMany();

      res.status(200).send({
        success: true,
        message: 'User Or Faculty fetched successfully.',
        data: userOrFacultyList,
      });
    } catch (error) {
      res.status(404).send({
        success: false,
        message: 'error in User Or Faculty fetch.',
        data: [],
      });
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    const roleInJWT = getRolesFromRequestObj(req);
    try {
      // if (roleInJWT.includes(ROLE_ADMIN) || roleInJWT.includes(ROLE_VPDEAN)) {
      if (roleInJWT.includes(ADMIN) || roleInJWT.includes(FACULTY)) {
        const savedUsers = await AppDataSource.manager.find(Users, {
          relations: ['role'],
        });
        res.status(200).send({
          success: true,
          message: 'Thankyou, get users ',
          data: savedUsers,
        });
      } else {
        res.status(401).send({
          success: false,
          message: 'You do not required grant to perform this operation.',
          data: [],
        });
      }
    } catch (error) {
      res.status(404).send({
        success: false,
        message: 'Error in users fetch',
        data: [],
      });
    }
  };

  getOneById = async (req: Request, res: Response) => {
    //Get the ID from the url
    const id = Number(req.params.id);
    try {
      const userRepository = AppDataSource.getRepository(Users);
      const user = await userRepository.findOne({
        relations: {
          role: true,
        },
        where: {
          id: id,
        },
      });
      res.status(200).send({
        success: true,
        message: 'Thankyou, fetched Users ',
        data: user,
      });
    } catch (error) {
      res.status(404).send({
        success: false,
        message: 'User not found',
        data: {},
      });
    }
  };

  registerUser = async (req: Request, res: Response) => {
    // await sleep(8000);
    const {
      username,
      password,
      roleId,
      firstName,
      lastName,
      email,
      contactNumber,
      departmentId,
    } = req.body;

    const user = new Users();
    user.username = username;
    user.password = password;
    user.email = email;
    user.firstName = firstName;
    user.lastName = lastName;
    user.contactNumber = contactNumber;
    user.isActive = true;

    if (departmentId) {
      const department = await AppDataSource.manager.findOne(Department, {
        where: { id: departmentId },
      });
      if (department != null) user.department = department;
    }

    const userRole = await AppDataSource.manager.find(UserRole, {
      where: { id: roleId },
    });

    if (userRole.length > 0) {
      user.role = userRole[0];

      const errors = await validate(user);
      if (errors.length > 0) {
        res.status(400).send({
          success: false,
          message: errors,
          data: {},
        });
        return;
      }

      //Hash the password, to securely store on DB
      user.hashPassword();

      try {
        await AppDataSource.manager.save(user);
        // console.log('User has been saved. User id is', user.id);

        res.status(200).send({
          success: true,
          message: 'Faculty (User) added successfuly.',
          data: {
            id: user.id,
            role: user.role,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            contactNumber: user.contactNumber,
            isActive: user.isActive,
            department: user.department,
          },
        });
      } catch (e: any) {
        let errorMessage = 'Could not save user.';
        if (e.code === ER_DUP_ENTRY) {
          errorMessage = 'Duplicate user, please try other or update existing.';
        }
        res.status(409).send({
          success: false,
          message: errorMessage,
          data: {},
        });
        return;
      }
    } else {
      res.status(409).send({
        success: false,
        message: 'specified role is not valid.',
        data: {},
      });
      return;
    }
  };

  updateUser = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const {
      role,
      firstName,
      lastName,
      email,
      contactNumber,
      isActive,
      departmentId,
    } = req.body;

    try {
      const userRepository = AppDataSource.getRepository(Users);
      const updatedUser = await userRepository.findOne({
        relations: {
          role: true,
          department: true,
        },
        where: { id: id },
      });

      // update role
      const userRole = await AppDataSource.manager.find(UserRole, {
        where: { role: In(role) },
      });
      if (userRole.length > 0) {
        updatedUser!.role = userRole[0];
      }

      if (departmentId) {
        const department = await AppDataSource.manager.findOne(Department, {
          where: { id: departmentId },
        });
        if (department != null) updatedUser!.department = department;
      }

      // update mobile
      if (isActive != undefined) updatedUser!.isActive = isActive;
      // if(username) updatedUser!.username = username;
      if (firstName) updatedUser!.firstName = firstName;
      if (lastName) updatedUser!.lastName = lastName;
      if (email) updatedUser!.email = email;
      if (contactNumber) updatedUser!.contactNumber = contactNumber;

      await AppDataSource.manager.save(updatedUser);

      res.status(200).send({
        success: true,
        message: 'Thankyou, user updated.',
        data: updatedUser,
      });
    } catch (error: any) {
      let errorMessage = 'Could not update user.';
      if (error.code === ER_DUP_ENTRY) {
        errorMessage =
          'Duplicate request, please try other or update existing.';
      }
      res.status(409).send({
        success: false,
        message: errorMessage,
        data: {},
      });
    }
  };
}

export default UserController;
