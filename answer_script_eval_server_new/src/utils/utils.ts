import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';

export const getUserIdFromReqHeaderToken = (req: Request) => {
  const token = <string>req.headers['authorization'];
  let jwtPayload;
  try {
    jwtPayload = <any>jwt.verify(token, config.jwtSecret);
    const { id, username } = jwtPayload;
    return {
      success: true,
      message: 'Valid token.',
      id: id,
      username: username,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Invalid token.',
      id: -1,
      username: -1,
    };
  }
};
