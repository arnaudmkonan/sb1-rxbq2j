import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import LevelSelector from './components/LevelSelector';
import QuizComponent from './components/QuizComponent';
import ProgressTracker from './components/ProgressTracker';
import { Level, Progress } from './types';

function App() {
  const [currentLevel, setCurrentLevel] = useState<Level>('beginner');
  const [progress, setProgress] = useState<Progress>({
    beginner: 0,
    advanced: 0,
    expert: 0,
  });

  useEffect(() => {
    const savedProgress = localStorage.getItem('geographyBeeProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('geographyBeeProgress', JSON.stringify(progress));
  }, [progress]);

  const handleLevelComplete = (level: Level, score: number) => {
    setProgress((prev) => ({
      ...prev,
      [level]: Math.max(prev[level], score),
    }));

    if (score >= 80) {
      const nextLevel = level === 'beginner' ? 'advanced' : 'expert';
      setCurrentLevel(nextLevel);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <Globe className="w-16 h-16 mx-auto mb-4 text-blue-600" />
        <h1 className="text-4xl font-bold text-gray-800">Geography Bee Trainer</h1>
      </header>
      <main className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <LevelSelector currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
        <ProgressTracker progress={progress} />
        <QuizComponent key={currentLevel} level={currentLevel} onComplete={handleLevelComplete} />
      </main>
    </div>
  );
}

export default App;