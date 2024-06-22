import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';
import { AppDataSource } from '../../data-source';

import { Users } from '../entity/Users.entity';

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the user ID from previous midleware
    const id = res.locals && res.locals.jwtPayload && res.locals.jwtPayload.id;

    //Get user role from the database
    const userRepository = AppDataSource.getRepository(Users);
    let user: Users;
    try {
      user = await userRepository.findOneOrFail({
        relations: {
          role: true,
        },
        where: { id: id },
      });

      const userRole = user.role;
      let hasAccess = false;
      roles.map((checkrole) => {
        if (userRole.role == checkrole) {
          hasAccess = true;
        }
      });
      if (hasAccess) {
        next();
      } else {
        res.status(401).send({
          success: false,
          message:
            'You do not have access to resource, please contact Administrator.',
          data: {},
        });
      }
    } catch (id) {
      res.status(401).send({
        success: false,
        message: 'You do not have access to resource.',
        data: {},
      });
    }
  };
};

export const getRolesFromRequestObj = (req: Request) => {
  const token = <string>req.headers['authorization'];
  let jwtPayload;
  try {
    jwtPayload = <any>jwt.verify(token, config.jwtSecret);
    const { role } = jwtPayload;
    return (role && role) || [];
  } catch (error) {
    return [];
  }
};

export const getUserIdFromRequestObj = (req: Request) => {
  const token = <string>req.headers['authorization'];
  let jwtPayload;
  try {
    jwtPayload = <any>jwt.verify(token, config.jwtSecret);
    const { id } = jwtPayload;
    return id;
  } catch (error) {
    return [];
  }
};
