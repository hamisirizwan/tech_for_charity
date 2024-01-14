const Joi = require('joi');

const kenyanPhoneNumberRegex = /^(07\d{8}|01\d{8}|2547\d{8}|2541\d{8}|\+2547\d{8}|\+2541\d{8})$/;

export const donationSchema = Joi.object({
  name: Joi.string().required(),
  amount: Joi.number().required(),
  phoneNumber: Joi.string().regex(kenyanPhoneNumberRegex).required(),
});