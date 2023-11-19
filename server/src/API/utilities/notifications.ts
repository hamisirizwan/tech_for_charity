const credentials = {
  apiKey: process.env.AT_API_KEY,
  username: process.env.AT_USERNAME,
};

// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;


const notify = {
  whatsapp: async function (phone:String, msg:String) {

  },
  sms: async function (phone:String, msg:String) {
    
    try {
      const formatted_phone = `+254${phone.substring(1)}`;
      const options = {
        to: formatted_phone,
        message: msg,
        from: "ELIMU",
      };
      sms
        .send(options)
        .then(() => {
          console.log("sent");
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (error: any) {
      console.log(error.message);
      return error.message;
    }

  },
  email: async function (email:String, msg:String) {},
};

export default notify;
