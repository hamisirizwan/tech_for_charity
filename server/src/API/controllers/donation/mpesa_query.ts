import { Request, Response } from "express";
import validateJoiSchema from "../../utilities/helpers/validateJoiSchema";
import Mpesa from "../../utilities/payments/mpesa";

import { env } from "../../../../env";
import Joi from "joi";

const validationSchema = Joi.object({
    CheckoutRequestID: Joi.string().required()
  });

const donateMpesaQuery = async (req: Request, res: Response) => {
  //validate body
  const callbackUrl = env.DONATION_CALLBACK_URL

  const mpesa = new Mpesa(callbackUrl);
  try {
    const payload = validateJoiSchema(req.body, validationSchema, {
      stripUnknown: true,
    });

    const { CheckoutRequestID } = payload;

    const response = await mpesa.stkQuery(CheckoutRequestID);

    return res
      .status(200)
      .json({ message: `Query Sent Successfully`, data: response });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message, status: 500 });
  }
};

export default donateMpesaQuery
