import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageToggle({ currentLang, onLanguageChange }: Props) {
  return (
    <button
      onClick={() => onLanguageChange(currentLang === 'en' ? 'ja' : 'en')}
      className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
    </button>
  );
}