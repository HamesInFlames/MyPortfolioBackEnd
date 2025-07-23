import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import compress from "compression";
import helmet from "helmet";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

//BODY PARSERS — load these BEFORE routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//MIDDLEWARE
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

//ROUTES
app.use("/", userRoutes);
app.use("/", authRoutes);

//ERROR HANDLER
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

export default app;
