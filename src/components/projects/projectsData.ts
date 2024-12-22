import { Project } from '../../types';

export const projectsData: Project[] = [
  {
    id: 'ai-image-generator',
    title: {
      en: 'AI Image Generator Platform',
      ja: 'AI画像生成プラットフォーム',
    },
    description: {
      en: 'A full-stack application that generates images using AI models. Features user authentication, image history, and sharing capabilities.',
      ja: 'AIモデルを使用して画像を生成するフルスタックアプリケーション。ユーザー認証、画像履歴、共有機能を実装。',
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API', 'AWS S3'],
    imageUrl: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=800&h=450',
    demoUrl: 'https://ai-image-generator.demo',
    githubUrl: 'https://github.com/username/ai-image-generator',
    contributions: {
      en: [
        'Implemented secure API integration with OpenAI',
        'Designed scalable image storage solution using AWS S3',
        'Optimized image processing for faster generation',
      ],
      ja: [
        'OpenAIとの安全なAPI連携を実装',
        'AWS S3を使用したスケーラブルな画像ストレージソリューションを設計',
        '画像処理を最適化し、生成速度を向上',
      ],
    },
  },
  {
    id: 'real-time-collab',
    title: {
      en: 'Real-time Collaboration Tool',
      ja: 'リアルタイムコラボレーションツール',
    },
    description: {
      en: 'A collaborative workspace application with real-time document editing, video chat, and task management features.',
      ja: 'リアルタイムの文書編集、ビデオチャット、タスク管理機能を備えたコラボレーションワークスペースアプリケーション。',
    },
    technologies: ['React', 'WebRTC', 'Socket.io', 'Redis', 'TypeScript'],
    imageUrl: 'https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&q=80&w=800&h=450',
    demoUrl: 'https://realtime-collab.demo',
    githubUrl: 'https://github.com/username/realtime-collab',
    contributions: {
      en: [
        'Architected real-time synchronization system',
        'Implemented WebRTC for peer-to-peer video chat',
        'Optimized performance for large documents',
      ],
      ja: [
        'リアルタイム同期システムを設計',
        'P2Pビデオチャット用のWebRTCを実装',
        '大規模文書の処理性能を最適化',
      ],
    },
  },
  {
    id: 'e-commerce-platform',
    title: {
      en: 'E-commerce Platform',
      ja: 'Eコマースプラットフォーム',
    },
    description: {
      en: 'A modern e-commerce platform with advanced search, real-time inventory management, and AI-powered recommendations.',
      ja: '高度な検索機能、リアルタイム在庫管理、AI搭載レコメンデーション機能を備えたモダンなEコマースプラットフォーム。',
    },
    technologies: ['Next.js', 'GraphQL', 'Elasticsearch', 'Docker', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800&h=450',
    demoUrl: 'https://ecommerce-platform.demo',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    contributions: {
      en: [
        'Developed advanced search with Elasticsearch',
        'Implemented secure payment processing',
        'Created AI-based recommendation engine',
      ],
      ja: [
        'Elasticsearchを使用した高度な検索機能を開発',
        '安全な決済処理を実装',
        'AIベースのレコメンデーションエンジンを作成',
      ],
    },
  },
];