import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Database connection file
import connectDb from "./config/db.js";

// Routes import
import unAnsweredQuestionRoute from "./routes/unAnsweredQuestionsRoute.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:8081",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Other middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running....");
});
app.use("/api/Question", unAnsweredQuestionRoute);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
