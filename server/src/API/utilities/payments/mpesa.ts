import axios from "axios";
import { env } from "../../../../env";

interface DonationData {
  name: string;
  phoneNumber: string;
  amount: number;
}

class Mpesa {
  consumerKey = env.MPESA_CONSUMER_KEY;
  secretKey = env.MPESA_CONSUMER_SECRET;
  passKey = env.MPESA_PASSKEY;
  shortcode = env.MPESA_PAYBILL;
  callbackUrl = env.CALLBACK_URL;

  async generateToken() {
    const auth: string = Buffer.from(
      `${this.consumerKey}:${this.secretKey}`
    ).toString("base64");

    try {
      const resp = await axios.get(
        "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
        {
          headers: {
            authorization: `Basic ${auth}`,
          },
        }
      );
      // console.log(resp);
      return resp.data.access_token;
    } catch (error) {
      console.error(error);
      throw new Error("fetch stk token error");
    }
  }

  async stkPush(phone: string, amount: number, jsonData: DonationData) {
    try {
      const date = new Date();
      const timestamp =
        date.getFullYear() +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2);

      const password: string = Buffer.from(
        this.shortcode + this.passKey + timestamp
      ).toString("base64");

      const token = await this.generateToken();

      const jsonString = JSON.stringify(jsonData);

      const urlEncodedString = encodeURIComponent(jsonString);

      const response = await axios.post(
        "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
        {
          BusinessShortCode: this.shortcode,
          Password: password,
          Timestamp: timestamp,
          TransactionType: "CustomerPayBillOnline",
          Amount: amount,
          PartyA: phone,
          PartyB: this.shortcode,
          PhoneNumber: phone,
          CallBackURL: `${this.callbackUrl}/?jsonData=${urlEncodedString}`,
          AccountReference: "techForCharity",
          TransactionDesc: "techForCharity",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //return the resp
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  }

  async stkQuery(CheckoutRequestID: string) {
    try {
      const date = new Date();
      const timestamp =
        date.getFullYear() +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2);

      const password = Buffer.from(
        this.shortcode + this.passKey + timestamp
      ).toString("base64");

      const token = await this.generateToken();

      const response = await axios.post(
        "https://api.safaricom.co.ke/mpesa/stkpushquery/v1/query",
        {
          BusinessShortCode: this.shortcode,
          Password: password,
          Timestamp: timestamp,
          CheckoutRequestID: CheckoutRequestID,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  mapCallback(body: any) {
    const amountObj = body.Item.find((obj: any) => obj.Name === "Amount");
    const amount = amountObj.Value;

    //code
    const codeObj = body.Item.find(
      (obj: any) => obj.Name === "MpesaReceiptNumber"
    );
    const mpesaCode = codeObj.Value;

    //phone
    const phoneNumberObj = body.Item.find(
      (obj: any) => obj.Name === "PhoneNumber"
    );
    const phoneNumber = phoneNumberObj.Value.toString();

    return { amount, mpesaCode, phoneNumber };
  }
}

export default Mpesa;
