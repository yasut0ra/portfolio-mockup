import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { Language } from '../types';
import { Menu, X } from 'lucide-react';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ currentLang, onLanguageChange }: Props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: currentLang === 'en' ? 'About' : '自己紹介', href: '#about' },
    { name: currentLang === 'en' ? 'Projects' : 'プロジェクト', href: '#projects' },
    { name: currentLang === 'en' ? 'Contact' : '連絡先', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle currentLang={currentLang} onLanguageChange={onLanguageChange} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4">
              <ThemeToggle />
              <LanguageToggle currentLang={currentLang} onLanguageChange={onLanguageChange} />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}