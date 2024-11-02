export type Level = 'beginner' | 'advanced' | 'expert';

export type Progress = {
  [key in Level]: number;
};

export type Question = {
  id: number;
  category: string;
  text: string;
  options: string[];
  correctAnswer: string;
};