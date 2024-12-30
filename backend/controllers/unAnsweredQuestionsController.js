import UnAnsweredQuestion from "../models/unAnsweredQuestionsModel.js";

// @desc Get all Questions
// @route Get /questions
// @access Public

const getAllQuestions = async (req, res) => {
  try {
    const questions = await UnAnsweredQuestion.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc Add a new Questions
// @route POST /question
// @access Public

const addQuestion = async (req, res) => {
  try {
    const { question, answer } = req.body;
    if (!question || !answer) {
      return res
        .status(400)
        .json({ message: "Question and Answer are required" });
    }
    const newQuestion = new UnAnsweredQuestion({ question, answer });
    await newQuestion.save();
  } catch (error) {
    res.status(500).json({ message: "Server Error ", error: error.message });
  }
};

// @desc Delete a Question
// @route Delete /question/:id
// @access Public

const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedQuestion = await UnAnsweredQuestion.findByIdAndDelete(id);
    if (!deletedQuestion) {
      return res.status(404).json({ message: "Question Not Found" });
    }
    res
      .status(200)
      .json({ message: "Question Deleted ", question: deletedQuestion });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc Update a question
// @route PUT /questions/:id
// @access Public
const updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;

    if (!question && !answer) {
      return res
        .status(400)
        .json({ message: "Question or answer must be provided for an update" });
    }

    // Find the question by ID and update
    const updatedQuestion = await UnAnsweredQuestion.findByIdAndUpdate(
      id,
      { ...(question && { question }), ...(answer && { answer }) },
      { new: true }
    );

    if (!updatedQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }

    res
      .status(200)
      .json({ message: "Question updated", question: updatedQuestion });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
 export {getAllQuestions,addQuestion,deleteQuestion,updateQuestion}