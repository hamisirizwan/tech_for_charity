import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import missingRequiredParams  from '../../utilities/validateRequiredInputs';
import { Request, Response } from 'express';
import prisma from '../../DB/prisma';
import generator from '../../utilities/generators';
import { apiREQ } from '../../types/globals/express.types';


const register = async (req: apiREQ, res: Response) => {
  const { first_name, last_name, is_super_admin,official_role_id,phone_number } = req.body;
  try {

    if(!req.user.is_super_admin){
        return res.status(400).json({message:"only super admins can create system users", status:400});
    }
    const missingField = missingRequiredParams(
      ['first_name', 'last_name', 'phone_number'],
      req.body
    );
    if (missingField) {
      return res.status(400).json(`${missingField} is required`);
    }

    // Check for existing email
    const existingEmail = await prisma.admins.findUnique({
      where: {
        phone_number: phone_number,
      },
    });

    if (existingEmail) {
      return res.status(400).json({message:`user with phone ${phone_number} already exists`, status:400});
    }

    // Hash the password

    //generate password
    const password = generator.random(7)
    const hashedPass = await bcrypt.hash(password, 10);

    const addedAdmin = await prisma.admins.create({
      data: {
        phone_number,
        first_name,
        last_name,
        is_super_admin,
        official_role_id,
        password: hashedPass,
      },
    });

    addedAdmin.password = '#############';
  

    const token = jwt.sign(addedAdmin, process.env.JWTSECRET!, {
      expiresIn: '3d',
    });

    //send invite message with password
    const message :string = `Hello ${first_name} ${last_name}.\nYou have been added a system admin at HUMANITY ORG PORTAL.\nLogin in at https:admin-tech-for-charity.vercel.app.\nYour password is ${password}`

    console.log(message)

 //send message to invited admin

    //
    return res
      .status(200)
      .json({ message: 'user created successfully', user: addedAdmin, token });
  } catch (error: any) {
    console.log(`ERROR REGISTERING ADMIN : ${error.message}`);
    res.status(500).json({message:error.message, status:500});
  }
};

export default register;
