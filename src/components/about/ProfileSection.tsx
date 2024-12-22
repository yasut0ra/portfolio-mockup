import React from 'react';
import { Language } from '../../types';
import { profileData } from './aboutData';

interface Props {
  language: Language;
}

export function ProfileSection({ language }: Props) {
  const data = profileData[language];
  
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h3 className="text-2xl font-semibold mb-4">{data.title}</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300">{data.summary}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-3">{data.currentRole.title}</h4>
          <p className="text-gray-600 dark:text-gray-300">{data.currentRole.description}</p>
        </div>
        <div>
          <h4 className="font-medium mb-3">{data.expertise.title}</h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {data.expertise.areas.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}