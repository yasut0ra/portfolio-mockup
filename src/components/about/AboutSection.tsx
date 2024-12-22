import React from 'react';
import { Language } from '../../types';
import { ProfileSection } from './ProfileSection';
import { AchievementsSection } from './AchievementsSection';
import { FutureSection } from './FutureSection';
import { FadeIn } from '../animations/FadeIn';

interface Props {
  language: Language;
}

export function AboutSection({ language }: Props) {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <FadeIn direction="up">
          <h2 className="text-3xl font-bold mb-12">
            {language === 'en' ? 'About Me' : '自己紹介'}
          </h2>
        </FadeIn>
        
        <div className="space-y-16">
          <FadeIn direction="up" delay={0.2}>
            <ProfileSection language={language} />
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <AchievementsSection language={language} />
          </FadeIn>
          <FadeIn direction="up" delay={0.6}>
            <FutureSection language={language} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}