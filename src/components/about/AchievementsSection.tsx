import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';
import { Language } from '../../types';
import { achievementsData } from './aboutData';

interface Props {
  language: Language;
}

export function AchievementsSection({ language }: Props) {
  const data = achievementsData[language];
  
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-6">{data.title}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.highlights.map((highlight, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              {index === 0 && <Trophy className="w-5 h-5 text-yellow-500" />}
              {index === 1 && <Award className="w-5 h-5 text-blue-500" />}
              {index === 2 && <Star className="w-5 h-5 text-purple-500" />}
              <h4 className="font-medium">{highlight.title}</h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{highlight.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h4 className="font-medium mb-4">{data.certifications.title}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.certifications.list.map((cert, index) => (
            <div key={index} className="flex items-center gap-3">
              <Award className="w-4 h-4 text-blue-500" />
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}