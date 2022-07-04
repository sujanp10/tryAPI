import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { port, DB } from "./config/config";
import route from "./route/route";
import { errorHandler } from "./middleware/errorHandler";
import cookieParser from "cookie-parser";
import passport from "passport";
import dPassport from "./middleware/passport";
import createHttpError from "http-errors";
const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());
dPassport(passport);

app.use("/", route);

app.use("", () => {
  throw createHttpError(404, "Route Not Found");
});

mongoose.connect(DB);

mongoose.connection.on("error", (err: Error) => {
  console.log(err);
});

mongoose.connection.once("open", () => {
  console.log("Connected to the Database.");
});

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
