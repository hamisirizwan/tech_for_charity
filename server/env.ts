import { cleanEnv, str, port } from 'envalid';

export const env = cleanEnv(process.env, {
  PORT: port(),
  DATABASE_URL: str(),
  JWTSECRET: str(),
  PL_DB_USER: str(),
  PL_DB_PASSWORD: str(),
  PL_DB_NAME: str(),
  PL_DATABASE_URL: str(),
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
