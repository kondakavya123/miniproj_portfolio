import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

import { Users } from '../entity/Users.entity';
import config from '../config/config';
import { AppDataSource } from '../../data-source';
import { SUCCESS } from '../constants/constants';
import { getUserIdFromReqHeaderToken } from '../utils/utils';

class AuthController {
  login = async (req: Request, res: Response) => {
    //Check if username and password are set
    const { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send({
        success: false,
        message: 'Username or password invalid.',
        data: {},
      });
    }

    //Get user from database
    const userRepository = AppDataSource.getRepository(Users);
    let user1: Users[] | [];
    let user: Users | null;
    try {
      user1 = await userRepository.query(
        `SELECT * FROM USERS WHERE username='${username}' and isActive = ${true}`,
      );
      if (user1.length > 0) {
        user = await userRepository.findOneOrFail({
          relations: {
            role: true,
          },
          where: {
            username,
            isActive: true,
          },
        });
        // if (user && !user1[0].checkIfUnencryptedPasswordIsValid(password)) {
        if (user && !bcrypt.compareSync(password, user1[0].password)) {
          res.status(401).send({
            success: false,
            message: 'Credential is not valid.',
            data: {},
          });
          return;
        }

        //Sing JWT, valid for 1 hour
        const token = jwt.sign(
          {
            id: user.id,
            username: user.username,
            role: user.role,
          },
          config.jwtSecret,
          { expiresIn: '1h' },
        );

        //Send the jwt in the response
        res.status(200).send({
          success: true,
          message: SUCCESS,
          data: {
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isActive: user.isActive,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            role: user.role,
            token: token,
          },
        });
      } else {
        res.status(401).send({
          success: false,
          message:
            'User not found or inactive, please contact admin, Login failed',
          data: {},
        });
      }
    } catch (error) {
      res.status(401).send({
        success: false,
        message:
          'User not found or not active, please contact admin, Login failed',
        data: {},
      });
    }
  };

  getCurrentUser = async (req: Request, res: Response) => {
    try {
      const jwtCheckRes = getUserIdFromReqHeaderToken(req);
      if (jwtCheckRes.success) {
        const userRepository = AppDataSource.getRepository(Users);
        const user = await userRepository.findOneOrFail({
          relations: {
            role: true,
          },
          where: {
            id: jwtCheckRes.id,
          },
        });
        //Sing JWT, valid for 1 hour
        const token = jwt.sign(
          {
            id: user.id,
            username: user.username,
            role: user.role,
          },
          config.jwtSecret,
          { expiresIn: '1h' },
        );
        res.status(200).send({
          success: true,
          message: 'Current user fetched successfully.',
          data: { user, token },
        });
      } else {
        res.status(400).send({
          success: false,
          message: 'Invalid current user',
          data: {},
        });
      }
    } catch (e) {
      res.status(400).send({
        success: false,
        message: 'Invalid current user.',
        data: {},
      });
    }
  };
}
export default AuthController;
