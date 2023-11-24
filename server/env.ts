import { cleanEnv, str, port } from 'envalid';

export const env = cleanEnv(process.env, {
  PORT: port(),
  DATABASE_URL: str(),
  JWTSECRET: str(),
  AT_API_KEY: str(),
  AT_USERNAME: str(),
  ADMIN_FIRST_NAME: str(),
  ADMIN_LAST_NAME: str(),
  ADMIN_PHONE_NUMBER: str(),
  ADMIN_COUNTRY: str(),
  ADMIN_PASSWORD: str(),
  ADMIN_EMAIL: str(),
  ADMIN_CITY:str(),
});
