import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../DB/prisma';
import missingRequiredParams from '../../utilities/validateRequiredInputs';
import { Request, Response } from 'express';




const login = async (req: Request, res: Response) => {
  const { phone, password } = req.body;
  try {
    const missingField = missingRequiredParams(["phone", "password"], req.body);
    if (missingField) {
      return res.status(400).json(`${missingField} is required`);
    }

    // find user
    const existingUser = await prisma.admins.findUnique({
      where: {
        phone_number: phone,
      },
    });

    if (!existingUser) {
      return res.status(400).json({message:`user with phone: ${phone} not found`, status:400});
    }

    // validate password
    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword) {
      return res.status(400).json({message:"wrong password" , status:400});
    }
    existingUser.password = '#############';

    const token = jwt.sign(existingUser, process.env.JWTSECRET!, {
      expiresIn: '3d',
    });

    res.status(200).json({ message: 'log in successful', user: existingUser, token });
  } catch (error:any) {
    console.log(error);
    res.status(500).json({message:error.message, status:500});
  }
};

export default login;
