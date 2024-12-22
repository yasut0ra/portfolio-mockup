import React from 'react';
import { Github, Globe } from 'lucide-react';
import { Language, Project } from '../../types';

interface Props {
  project: Project;
  language: Language;
}

export function ProjectCard({ project, language }: Props) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title[language]}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title[language]}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description[language]}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            {language === 'en' ? 'Technologies' : '使用技術'}:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            {language === 'en' ? 'Key Contributions' : '主な貢献'}:
          </h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
            {project.contributions[language].map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'Live Demo' : 'デモ'}
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}