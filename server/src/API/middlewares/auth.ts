import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import prisma from "../DB/prisma";

// Extend the Request object to add a 'user' property

type apiREQ = Request & { user?: any };

const Auth = asyncHandler(
  async (req: apiREQ, res: Response, next: NextFunction) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const decoded: any = jwt.verify(token, process.env.JWTSECRET!);

        req.user = await prisma.users.findFirst({
          where: {
            OR: [
              { phone_number: decoded.phone_number },
              { email: decoded.email },
            ],
          },
          include: {
            user_roles: {
              include: {
                roles: {
                  include: {
                    role_permissions: true,
                  },
                },
              },
            },
          },
        });

        next();
      } catch (error) {
        console.error(error);
        res
          .status(401)
          .json({ message: "Not authorized, token failed", status: 401 });
      }
    }

    if (!token) {
      res
        .status(401)
        .json({ message: "Not authorized, no token", status: 401 });
    }
  }
);

export default Auth;
