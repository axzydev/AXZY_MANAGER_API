import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";
import helmet from "helmet";
import cors from "cors";

//ROUTES
import indexRoute from "./routes/index.routes";
import appRoute from "./routes/app.routes";
import mandtRoute from "./routes/mandt.routes";
import userRoute from "./routes/user.routes";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json(), helmet(), cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/", indexRoute);
app.use("/app", appRoute);
app.use("/mandt", mandtRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`[App] Listening on: ${PORT}`);
});
