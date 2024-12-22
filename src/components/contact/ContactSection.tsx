import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { Language } from '../../types';
import { FadeIn } from '../animations/FadeIn';

interface Props {
  language: Language;
}

export function ContactSection({ language }: Props) {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <FadeIn direction="up">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'en' ? 'Contact' : '連絡先'}
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn direction="left" delay={0.2}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <ContactForm language={language} />
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.4}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <ContactInfo language={language} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}