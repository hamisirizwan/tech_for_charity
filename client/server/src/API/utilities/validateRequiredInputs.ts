import { Request } from "express";

const missingRequiredParams = (requiredParams:any,body:Request) => {
    for (const paramName of requiredParams) {
      if (!Object.keys(body).includes(paramName)) {
      return paramName
      }
    }
    return false
  };
  
export default  missingRequiredParams;