import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const generateQuestion = async (level: string): Promise<{ question: string; options: string[]; correctAnswer: string }> => {
  const prompt = `Generate a ${level} level geography question with 4 options and the correct answer. Format the response as JSON with the following structure:
  {
    "question": "The question text",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "correctAnswer": "The correct option"
  }`;

  try {
    console.log('Sending request to OpenAI API...');
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    console.log('Received response from OpenAI API.');
    const content = response.choices[0].message.content;
    if (content) {
      console.log('Parsing OpenAI response:', content);
      return JSON.parse(content);
    } else {
      throw new Error("Failed to generate question: Empty response");
    }
  } catch (error) {
    console.error("Error generating question:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
      console.error("Error stack:", error.stack);
    }
    throw new Error(`Failed to generate question: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};