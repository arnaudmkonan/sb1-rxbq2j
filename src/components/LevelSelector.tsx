import React from 'react';
import { Level } from '../types';

type LevelSelectorProps = {
  currentLevel: Level;
  setCurrentLevel: (level: Level) => void;
};

const LevelSelector: React.FC<LevelSelectorProps> = ({ currentLevel, setCurrentLevel }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Select Level:</h2>
      <div className="flex space-x-4">
        {['beginner', 'advanced', 'expert'].map((level) => (
          <button
            key={level}
            className={`px-4 py-2 rounded ${
              currentLevel === level
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setCurrentLevel(level as Level)}
          >
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;