import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";

dotenv.config('.env');

const outputFile = './swagger_output.json';
const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, {  
  info: {
    title: "The Trailers Service",
    version: "0.0.1",
    description: "The Trailers Service for The Trailers App.",
  },
  host: `localhost:${process.env.PORT}`,
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization'
    }
  }
});
