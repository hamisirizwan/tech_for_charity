const Joi = require('joi');

const validateJoiSchema = (payload:any, schema:any, options = {}) => {
  const { error } = schema.validate(payload, options);
  if (error) {
    throw new Error(error.message.replace(/['"]/g, ''));
  }
  return payload;
};

export default validateJoiSchema;