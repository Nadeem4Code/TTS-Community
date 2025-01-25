import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";


import connectDB from "./config/db.js";
import UnAnsweredQuestion from "./models/unAnsweredQuestionsModel.js";
import unAnsweredQuestions from "./data/unAnsweredQuestions.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await UnAnsweredQuestion.deleteMany();

    const sampleQuestions = unAnsweredQuestions.map((question) => {
      return { ...question };
    });

    await UnAnsweredQuestion.insertMany(sampleQuestions);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await UnAnsweredQuestion.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
