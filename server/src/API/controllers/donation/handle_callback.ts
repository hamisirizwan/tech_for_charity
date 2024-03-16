import { Request, Response } from "express";
import validateJoiSchema from "../../utilities/helpers/validateJoiSchema";
import { donationSchema } from "../../utilities/validators/donation.validation";
import Mpesa from "../../utilities/payments/mpesa";
import { normalizeKenyanPhoneNumber } from "../../utilities/helpers/normalizeKenyanNumber";

const handleDonateCallback = async (req: Request, res: Response) => {
  //validate body
//   const mpesa = new Mpesa();
  try {

    console.log(req.body)

    res.json("ok")
    // const payload = validateJoiSchema(req.body, donationSchema, {
    //   stripUnknown: true,
    // });

    // const { phoneNumber, amount } = payload;

    // const phone = normalizeKenyanPhoneNumber(phoneNumber);

    // const response = await mpesa.stkPush(phone, amount, payload);

    // return res
    //   .status(200)
    //   .json({ message: `Stk push sent to ${phone}`, data: response });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message, status: 500 });
  }

};

export default handleDonateCallback
