import React from 'react';
import { Header } from './components/Header';
import { AboutSection } from './components/about/AboutSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Layout } from './components/Layout';
import { Language } from './types';
import { FadeIn } from './components/animations/FadeIn';
import { ParallaxBackground } from './components/animations/ParallaxBackground';

export default function App() {
  const [language, setLanguage] = React.useState<Language>('en');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header currentLang={language} onLanguageChange={setLanguage} />
      
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-[85ch] mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <FadeIn direction="left" delay={0.2}>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 text-transparent bg-clip-text">
                    {language === 'en' ? 'Software Engineer' : 'ソフトウェアエンジニア'}
                  </h1>
                </FadeIn>
                <FadeIn direction="left" delay={0.4}>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {language === 'en'
                      ? 'Passionate about creating elegant solutions to complex problems.'
                      : '複雑な問題にエレガントな解決策を提供することに情熱を注いでいます。'}
                  </p>
                </FadeIn>
                <FadeIn direction="up" delay={0.6}>
                  <div className="flex gap-4">
                    <a
                      href="#projects"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors hover:scale-105 transform duration-300"
                    >
                      {language === 'en' ? 'View Projects' : 'プロジェクトを見る'}
                    </a>
                    <a
                      href="#contact"
                      className="px-6 py-3 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors hover:scale-105 transform duration-300"
                    >
                      {language === 'en' ? 'Contact Me' : '連絡する'}
                    </a>
                  </div>
                </FadeIn>
              </div>
              <div className="flex-1 flex justify-center">
                <FadeIn direction="right" delay={0.4}>
                  <ParallaxBackground speed={0.5}>
                    <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 p-1 animate-float">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=300&h=300"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </ParallaxBackground>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <AboutSection language={language} />
        <ProjectsSection language={language} />
        <ContactSection language={language} />
      </Layout>
    </div>
  );
}