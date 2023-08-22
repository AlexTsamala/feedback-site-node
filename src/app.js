import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import connectToMongo from "./config/mongo.js";
import dotenv from "dotenv";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import feedbackRouter from "./router/feedback-router.js";
import ErrorHandler from "./middlewares/error-handler.js";
import categoryRouter from "./router/category-router.js";
import usersRouter from "./router/users-route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();
connectToMongo();

app.use("/api", feedbackRouter);
app.use("/api", categoryRouter);
app.use("/api", usersRouter);

app.use("/", ...swaggerMiddleware());
app.use(ErrorHandler);

app.listen(process.env.PORT || 4001, () => {
  console.log("started server on port 4001");
});
