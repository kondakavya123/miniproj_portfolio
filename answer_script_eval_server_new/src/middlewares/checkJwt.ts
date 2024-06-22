import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers['authorization'];
  let jwtPayload;
  try {
    jwtPayload = <any>jwt.verify(token, config.jwtSecret);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    res.status(401).send({
      success: false,
      message: 'Invalid token.',
      data: {},
    });
    return;
  }

  // Re-new token, The token is valid for 1 hour
  const { id, username, role } = jwtPayload;
  const newToken = jwt.sign({ id, username, role }, config.jwtSecret, {
    expiresIn: '1h',
  });
  res.setHeader('token', newToken);
  // req.headers['role'] = role;

  //Call the next middleware or controller
  next();
};
