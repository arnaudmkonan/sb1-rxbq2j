import React, { useState, useEffect } from 'react';
import { Level, Question } from '../types';
import { getQuestions } from '../utils/quizData';

type QuizComponentProps = {
  level: Level;
  onComplete: (level: Level, score: number) => void;
};

const QuizComponent: React.FC<QuizComponentProps> = ({ level, onComplete }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      setError(null);
      try {
        const loadedQuestions = await getQuestions(level);
        setQuestions(loadedQuestions);
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizCompleted(false);
      } catch (err) {
        console.error('Error loading questions:', err);
        setError('Failed to load questions. Using fallback questions.');
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [level]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      onComplete(level, (score / questions.length) * 100);
    }
  };

  if (loading) {
    return <div className="text-center">Loading questions...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (quizCompleted) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl">Your score: {score} out of {questions.length}</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Question {currentQuestionIndex + 1}</h2>
      <p className="mb-4">{currentQuestion.text}</p>
      <div className="space-y-2">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className="w-full p-2 text-left border rounded hover:bg-gray-100"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizComponent;