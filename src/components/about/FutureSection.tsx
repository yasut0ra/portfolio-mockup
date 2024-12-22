import React from 'react';
import { Target, Lightbulb, Rocket } from 'lucide-react';
import { Language } from '../../types';
import { futureData } from './aboutData';

interface Props {
  language: Language;
}

export function FutureSection({ language }: Props) {
  const data = futureData[language];
  
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-6">{data.title}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-blue-500" />
            <h4 className="font-medium">{data.goals.title}</h4>
          </div>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {data.goals.items.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            <h4 className="font-medium">{data.interests.title}</h4>
          </div>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {data.interests.items.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Rocket className="w-5 h-5 text-purple-500" />
            <h4 className="font-medium">{data.impact.title}</h4>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{data.impact.description}</p>
        </div>
      </div>
    </div>
  );
}