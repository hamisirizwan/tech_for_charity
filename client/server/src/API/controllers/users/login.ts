import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../DB/prisma';
import missingRequiredParams from '../../utilities/validateRequiredInputs';
import { Request, Response } from 'express';



const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const missingField = missingRequiredParams(["username", "password"], req.body);
    if (missingField) {
      return res.status(400).json(`${missingField} is required`);
    }

    // find user
    const existingUser = await prisma.users.findUnique({
      where: {
        username: username,
      },
    });

    if (!existingUser) {
      return res.status(400).json(`user with username: ${username} not found`);
    }

    // validate password
    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) {
      return res.status(400).json("wrong password");
    }
    existingUser.password = '#############';

    const token = jwt.sign(existingUser, process.env.JWTSECRET!, {
      expiresIn: '3d',
    });

    res.status(200).json({ message: 'log in successful', user: existingUser, token });
  } catch (error:any) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

export default login;
