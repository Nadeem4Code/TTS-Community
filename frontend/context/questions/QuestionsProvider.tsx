import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Question {
  _id: string;
  question: string;
  answer: string;
}
interface QuestionContextType {
  questions: Question[];
  loading: boolean;
  fetchQuestions: () => Promise<void>;
}

export const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined
);

interface QuestionProviderProps {
  children: ReactNode;
}

export const QuestionProvider: React.FC<QuestionProviderProps> = ({
  children,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/Question'); // Backend API endpoint
      setQuestions(response.data); // Set questions state with the data
    } catch (error) {
      console.error('Error fetching questions:', error.message); // Log the error for debugging
      alert('Failed to fetch questions. Please check the server.');
    } finally    {
      setLoading(false); // Ensure loading stops
    }
  };




  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <QuestionContext.Provider value={{ questions, loading, fetchQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};
