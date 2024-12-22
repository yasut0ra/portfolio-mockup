import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Language } from '../../types';
import { socialLinks } from './contactData';

interface Props {
  language: Language;
}

export function ContactInfo({ language }: Props) {
  const labels = {
    title: language === 'en' ? 'Contact Information' : '連絡先情報',
    email: language === 'en' ? 'Email' : 'メール',
    phone: language === 'en' ? 'Phone' : '電話番号',
    address: language === 'en' ? 'Address' : '住所',
    social: language === 'en' ? 'Social Media' : 'ソーシャルメディア',
  };

  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">{labels.title}</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <a href="mailto:contact@example.com" className="hover:text-blue-600 dark:hover:text-blue-400">
            contact@example.com
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <a href="tel:+1234567890" className="hover:text-blue-600 dark:hover:text-blue-400">
            +1 (234) 567-890
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <address className="not-italic">
            123 Tech Street, Silicon Valley, CA 94025
          </address>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-3">{labels.social}</h4>
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.platform as keyof typeof iconMap];
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={link.platform}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}