import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../DB/prisma';
import missingRequiredParams from '../../utilities/validateRequiredInputs';
import { Request, Response } from 'express';
import generator from '../../utilities/generators';




const sendJoiningRequest = async (req: Request, res: Response) => {
  const { first_name,last_name,phone_number,country} = req.body;
  try {
    const missingField = missingRequiredParams(["first_name", "last_name","phone_number","country"], req.body);
    if (missingField) {
      return res.status(400).json(`${missingField} is required`);
    }

    // find user
    const existingMember = await prisma.members.findUnique({
      where: {
        phone_number: phone_number,
      },
    });

    if (existingMember) {
      return res.status(400).json({message:`member with phone: ${phone_number} already exists`, status:400});
    }

    const addedMember = await prisma.members.create({
      data: {
        phone_number,
        first_name,
        last_name,
        country,
      },
    });


    //send invite message with password
    const message :string = `Hello ${first_name} ${last_name}.\nYour Request to join HUMANITY FIRST HOME has been received.\nOne of our admins will reach out to you for further clarifications`

    console.log(message)
    console.log(addedMember)

 //send message to invited admin

    //
    return res
      .status(200)
      .json({ message: 'Request sent successfully' });
  } catch (error:any) {
    console.log(error);
    res.status(500).json({message:error.message, status:500});
  }
};

export default sendJoiningRequest;
