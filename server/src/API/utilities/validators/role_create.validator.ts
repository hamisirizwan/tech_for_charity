import Joi from "joi";
// import { systemPermissions } from "../../permissions/permissions_list";



const moduleSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Module name must be a string.",
    "any.required": "Module name is required.",
  }),
  permissions: Joi.array().items(Joi.string()).required().messages({
    "array.base": "Permissions must be an array.",
    "any.required": "Permissions are required.",
  }),
})
  .required()
  .messages({
    "object.base": "Module must be an object.",
  });

const createRoleSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Role name must be a string.",
    "any.required": "Role name is required.",
  }),
  modules: Joi.array().items(moduleSchema).min(1).required().messages({
    "array.base": "Modules must be an array.",
    "array.min": "At least one module is required.",
    "any.required": "Modules are required.",
  }),
});

export { createRoleSchema };
