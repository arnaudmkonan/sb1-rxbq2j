import { Level, Question } from '../types';
import { generateQuestion } from './openai';
import { fallbackQuestions } from './fallbackQuestions';

const questionsCache: { [key in Level]: Question[] } = {
  beginner: [],
  advanced: [],
  expert: [],
};

export const getQuestions = async (level: Level): Promise<Question[]> => {
  if (questionsCache[level].length === 0) {
    try {
      console.log(`Generating questions for ${level} level...`);
      const newQuestions = await Promise.all(
        Array(5).fill(null).map(async (_, index) => {
          console.log(`Generating question ${index + 1}...`);
          const { question, options, correctAnswer } = await generateQuestion(level);
          console.log(`Question ${index + 1} generated successfully.`);
          return {
            id: index + 1,
            text: question,
            options,
            correctAnswer,
          };
        })
      );
      console.log(`All questions generated for ${level} level.`);
      questionsCache[level] = newQuestions;
    } catch (error) {
      console.error('Error generating questions:', error);
      console.log('Using fallback questions...');
      questionsCache[level] = fallbackQuestions[level];
    }
  } else {
    console.log(`Using cached questions for ${level} level.`);
  }

  return questionsCache[level];
};