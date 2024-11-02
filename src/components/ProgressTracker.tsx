import React from 'react';
import { Progress } from '../types';

type ProgressTrackerProps = {
  progress: Progress;
};

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Your Progress:</h2>
      <div className="space-y-2">
        {Object.entries(progress).map(([level, score]) => (
          <div key={level} className="flex items-center">
            <span className="w-24 font-medium">{level.charAt(0).toUpperCase() + level.slice(1)}:</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${score}%` }}
              ></div>
            </div>
            <span className="ml-2">{score}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;