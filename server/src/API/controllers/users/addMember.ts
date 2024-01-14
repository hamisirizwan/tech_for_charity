import bcrypt from "bcryptjs";
import prisma from "../../DB/prisma";
import missingRequiredParams from "../../utilities/validateRequiredInputs";
import { Response } from "express";
import generator from "../../utilities/generators";
import notify from "../../utilities/notifications";
import { apiREQ } from "../../types/globals/express.types";
import { dateGenerators } from "../../utilities/dates";

const addMember = async (req: apiREQ, res: Response) => {
  const { first_name, last_name, phone_number, country, city, email } =
    req.body;
  try {
    const missingField = missingRequiredParams(
      ["first_name", "last_name", "phone_number", "country"],
      req.body
    );
    if (missingField) {
      return res.status(400).json({status:400, message:`${missingField} is required`});
      
    }

    // find user
    const existingMember = await prisma.users.findUnique({
      where: {
        phone_number: phone_number,
      },
    });

    if (existingMember) {
      return res
        .status(400)
        .json({
          message: `member with phone: ${phone_number} already exists`,
          status: 400,
        });
    }

    const generatedPassword = generator.password()

const hashedPass = await bcrypt.hash(generatedPassword, 10);
  
    const userInfo = {
        phone_number,
        first_name,
        last_name,
        country,
        city,
        email,
        is_active:true,
        is_approved: true,
        approvedBy:req.user?.id,
        approvedAt: dateGenerators.getCurrentTimestamp(),
        password:hashedPass
    }
     await prisma.users.create({
      data:userInfo
    });

    //send invite message with password
    const message: string = `Hello ${first_name} ${last_name}.\nYour You have been added as a HUMANITY FIRST HOME member\nWelcome to the family. Your Password is ${generatedPassword}\n\nOne Smile Matters, Humanity Matters`;


    console.log(message)
    //send message
    notify.sms(phone_number, message);
    //
    return res.status(200).json({ message: "Member Added successfully" });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message, status: 500 });
  }
};

export default addMember;
