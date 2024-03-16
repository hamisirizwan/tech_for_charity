import { Request, Response } from "express";
import Mpesa from "../../utilities/payments/mpesa";
import { normalizeKenyanPhoneNumber } from "../../utilities/helpers/normalizeKenyanNumber";

const handleDonateCallback = async (req: Request, res: Response) => {
  //validate body
  const mpesa = new Mpesa("");

  if (!req.body.Body.stkCallback.CallbackMetadata) {
    console.log(req.body.Body.stkCallback.ResultDesc);
    res.status(200).json("ok saf");
    return;
  }

  const body = req.body.Body.stkCallback.CallbackMetadata
  const callbackData = mpesa.mapCallback(body)
  const urlEncodedString = req.query.jsonData;
  const jsonString = decodeURIComponent(urlEncodedString as string);
  const jsonData = JSON.parse(jsonString);

  try {

    console.log(callbackData)
    console.log(jsonData)

    res.json("ok")
  } catch (error: any) {
    console.log(error);
    res.status(200).json("ok saf");
  }
};

export default handleDonateCallback
