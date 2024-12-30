import express from "express";

// Controller import
import {
  getAllQuestions,
  addQuestion,
  deleteQuestion,
  updateQuestion,
} from "../controllers/UnAnsweredQuestionsController.js";

const router = express.Router();

// Route to get all questions
router.get("/", getAllQuestions);

// Route to add a question
router.post("/", addQuestion);

// Route to delete a question (requires ID)
router.delete("/:id", deleteQuestion);

// Route to update a question (requires ID)
router.put("/:id", updateQuestion);

export default router;
