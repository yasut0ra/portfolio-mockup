import React from 'react';
import { Language } from '../../types';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

interface Props {
  skill: Skill;
  language: Language;
}

export function SkillCard({ skill, language }: Props) {
  const levelText = language === 'en' 
    ? ['Beginner', 'Intermediate', 'Advanced', 'Expert'][skill.level - 1]
    : ['初級', '中級', '上級', '熟練'][skill.level - 1];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="text-blue-600 dark:text-blue-400">
          {skill.icon}
        </div>
        <div>
          <h3 className="font-medium">{skill.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{levelText}</p>
        </div>
      </div>
    </div>
  );
}