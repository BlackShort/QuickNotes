import express from "express";
import userRouter from './routes/user.js';
import noteRouter from './routes/notes.js';
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";

export const app = express();

config({
    path: "./data/config.env",
});

// Using Middleware
app.use(express.json());
app.use(cookieParser());

// Adjusted CORS setup
app.use("*",cors({
    origin: "https://quicknotes-knight.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/notes", noteRouter);

app.get("/", (req, res) => {
    res.send("Nice working");
});

// Using Error Middleware
app.use(errorMiddleware);
