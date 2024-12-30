import mongoose from "mongoose";

const unAnsweredQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const UnAnsweredQuestion = mongoose.model(
  "UnAnsweredQuestion",
  unAnsweredQuestionSchema
);

export { unAnsweredQuestionSchema };
export default UnAnsweredQuestion;
