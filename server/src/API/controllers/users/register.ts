import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import missingRequiredParams  from '../../utilities/validateRequiredInputs';
import { Request, Response } from 'express';
import prisma from '../../DB/prisma';


const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;
  try {
    const missingField = missingRequiredParams(
      ['email', 'username', 'password'],
      req.body
    );
    if (missingField) {
      return res.status(400).json(`${missingField} is required`);
    }

    // Check for existing email
    const existingEmail = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (existingEmail) {
      return res.status(400).json(`user with email ${email} already exists`);
    }

    // Check for existing username
    const existingUserName = await prisma.users.findUnique({
      where: {
        username: username,
      },
    });

    if (existingUserName) {
      return res
        .status(400)
        .json(`user with username ${username} already exists`);
    }

    // Hash the password
    const hashedPass = await bcrypt.hash(password, 10);

    const addedUser = await prisma.users.create({
      data: {
        email: email,
        username: username,
        password: hashedPass,
      },
    });

    addedUser.password = '#############';
    console.log(addedUser);

    const token = jwt.sign(addedUser, process.env.JWTSECRET!, {
      expiresIn: '3d',
    });

    return res
      .status(200)
      .json({ message: 'user created successfully', user: addedUser, token });
  } catch (error: any) {
    console.log(`ERROR REGISTERING USER : ${error.message}`);
    res.status(500).json(error.message);
  }
};

export default register;
