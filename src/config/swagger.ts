import swaggerJsdoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "APP MANAGER API",
      version: "1.0.0",
      description: "Documentación de la API de APP MANAGER",
      contact: {
        name: "Martin Asael Amaro Garcia",
        email: "maag070208@gmail.com",
        url: "http://maag070208.com",
      },
    },
    servers: [
      {
        url: "http://localhost:4321",
        description: "DEV",
      },
    ],
  },
  apis: ["src/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
