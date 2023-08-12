import dotenv from "dotenv";

dotenv.config('.env');

export const port = process.env.PORT;
export const mongoDBConnectionString = process.env.MONGODB_CONNECTION_STRING;