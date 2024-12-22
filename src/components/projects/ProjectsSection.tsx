import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Language } from '../../types';
import { projectsData } from './projectsData';
import { FadeIn } from '../animations/FadeIn';

interface Props {
  language: Language;
}

export function ProjectsSection({ language }: Props) {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl px-4">
        <FadeIn direction="up">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'en' ? 'Projects' : 'プロジェクト'}
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <FadeIn
              key={project.id}
              direction="up"
              delay={0.2 * (index + 1)}
            >
              <ProjectCard
                project={project}
                language={language}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}