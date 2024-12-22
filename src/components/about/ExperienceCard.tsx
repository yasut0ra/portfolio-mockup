import React from 'react';
import { Language } from '../../types';

interface Experience {
  title: { en: string; ja: string; };
  company: { en: string; ja: string; };
  period: { en: string; ja: string; };
  description: { en: string; ja: string; };
}

interface Props {
  experience: Experience;
  language: Language;
}

export function ExperienceCard({ experience, language }: Props) {
  return (
    <div className="border-l-2 border-blue-600 dark:border-blue-400 pl-4 pb-8">
      <h3 className="font-semibold text-lg">
        {experience.title[language]}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
        {experience.company[language]} | {experience.period[language]}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        {experience.description[language]}
      </p>
    </div>
  );
}