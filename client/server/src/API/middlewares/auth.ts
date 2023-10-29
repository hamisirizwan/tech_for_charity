import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import prisma from '../DB/prisma';




// Extend the Request object to add a 'user' property

type apiREQ = Request & {user?:any}

const Auth = asyncHandler(async (req: apiREQ, res: Response, next: NextFunction) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

    
      const decoded: any = jwt.verify(token, process.env.JWTSECRET!);

      req.user = await prisma.users.findUnique({
        where: {
          email: decoded.email,
        },
      });

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401).json('Not authorized, no token');
    // You can also throw an error if you prefer
    // throw new Error('Not authorized, no token');
  }
});

export default Auth
