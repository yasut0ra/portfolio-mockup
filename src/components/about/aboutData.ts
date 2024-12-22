import { Language } from '../../types';

type LocalizedData<T> = {
  [K in Language]: T;
};

interface ProfileData {
  title: string;
  summary: string;
  currentRole: {
    title: string;
    description: string;
  };
  expertise: {
    title: string;
    areas: string[];
  };
}

interface AchievementsData {
  title: string;
  highlights: Array<{
    title: string;
    description: string;
  }>;
  certifications: {
    title: string;
    list: string[];
  };
}

interface FutureData {
  title: string;
  goals: {
    title: string;
    items: string[];
  };
  interests: {
    title: string;
    items: string[];
  };
  impact: {
    title: string;
    description: string;
  };
}

export const profileData: LocalizedData<ProfileData> = {
  en: {
    title: 'Professional Background',
    summary: 'Senior Software Engineer with 5+ years of experience specializing in full-stack web development and cloud architecture.',
    currentRole: {
      title: 'Current Role',
      description: 'Lead Developer at Tech Solutions Inc., managing a team of 6 engineers and architecting scalable web applications.',
    },
    expertise: {
      title: 'Core Expertise',
      areas: [
        'Full-stack Web Development',
        'Cloud Architecture (AWS)',
        'Team Leadership',
        'Agile Methodologies',
      ],
    },
  },
  ja: {
    title: '職歴',
    summary: 'フルスタック開発とクラウドアーキテクチャを専門とする5年以上の経験を持つシニアソフトウェアエンジニア。',
    currentRole: {
      title: '現在の役職',
      description: 'テックソリューションズ株式会社のリード開発者として、6人のエンジニアチームを管理し、スケーラブルなWebアプリケーションの設計を担当。',
    },
    expertise: {
      title: '専門分野',
      areas: [
        'フルスタック Web開発',
        'クラウドアーキテクチャ (AWS)',
        'チームリーダーシップ',
        'アジャイル開発手法',
      ],
    },
  },
};

export const achievementsData: LocalizedData<AchievementsData> = {
  en: {
    title: 'Achievements & Expertise',
    highlights: [
      {
        title: 'Performance Optimization',
        description: 'Improved application performance by 40% through innovative caching strategies and code optimization.',
      },
      {
        title: 'Team Leadership',
        description: 'Led a team of 6 developers to successfully deliver 3 major projects ahead of schedule.',
      },
      {
        title: 'Technical Innovation',
        description: 'Implemented microservices architecture that reduced deployment time by 60%.',
      },
    ],
    certifications: {
      title: 'Professional Certifications',
      list: [
        'AWS Certified Solutions Architect',
        'Google Cloud Professional Developer',
        'Certified Kubernetes Administrator',
        'Professional Scrum Master I',
      ],
    },
  },
  ja: {
    title: '実績とスキル',
    highlights: [
      {
        title: 'パフォーマンス最適化',
        description: '革新的なキャッシング戦略とコード最適化により、アプリケーションのパフォーマンスを40%向上。',
      },
      {
        title: 'チームリーダーシップ',
        description: '6人の開発者チームを率いて、3つの主要プロジェクトを予定より早く納品。',
      },
      {
        title: '技術革新',
        description: 'マイクロサービスアーキテクチャを実装し、デプロイ時間を60%削減。',
      },
    ],
    certifications: {
      title: '資格',
      list: [
        'AWS 認定ソリューションアーキテクト',
        'Google Cloud プロフェッショナル開発者',
        '認定Kubernetes管理者',
        'プロフェッショナルスクラムマスター I',
      ],
    },
  },
};

export const futureData: LocalizedData<FutureData> = {
  en: {
    title: 'Future Direction',
    goals: {
      title: 'Strategic Goals',
      items: [
        'Lead cloud-native transformations',
        'Mentor next-gen developers',
        'Contribute to open-source',
      ],
    },
    interests: {
      title: 'Areas of Interest',
      items: [
        'Edge Computing',
        'AI/ML Integration',
        'Sustainable Tech',
      ],
    },
    impact: {
      title: 'Intended Impact',
      description: 'Driving innovation through sustainable, scalable solutions while mentoring the next generation of developers.',
    },
  },
  ja: {
    title: '将来の方向性',
    goals: {
      title: '戦略的目標',
      items: [
        'クラウドネイティブ変革の主導',
        '次世代開発者の育成',
        'オープンソースへの貢献',
      ],
    },
    interests: {
      title: '関心分野',
      items: [
        'エッジコンピューティング',
        'AI/ML統合',
        'サステナブルテック',
      ],
    },
    impact: {
      title: '目指す影響',
      description: '持続可能でスケーラブルなソリューションを通じてイノベーションを推進しながら、次世代の開発者を育成する。',
    },
  },
};