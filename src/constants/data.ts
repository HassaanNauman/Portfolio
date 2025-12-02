// Portfolio constants - All portfolio data in one place

export interface Author {
  _id: string
  name: string
  initials: string
  avatar?: {
    asset?: {
      url?: string
    }
  }
  description?: string
  summary?: string
  location?: string
  skills?: string[]
  social?: {
    github?: string
    linkedin?: string
    twitter?: string
    youtube?: string
    email?: string
  }
}

export interface Project {
  _id: string
  title: string
  description: string
  shortDescription: string
  technologies?: string[]
  tags?: string[]
  image?: {
    asset?: {
      url?: string
    }
  }
  heroImage?: string
  githubLink?: string | null
  previewUrl?: string | null
  slug?: string
  content?: unknown // For Lexical content if needed
}

// Portfolio data
export const AUTHOR: Author = {
  _id: 'author-1',
  name: 'Hassaan Nauman',
  initials: 'HN',
  avatar: {
    asset: {
      url: 'https://i.pinimg.com/736x/45/c9/30/45c930089bd6991ac39e475423a1bb61.jpg',
    },
  },
  description: 'I build web that builds brands.',
  summary:
    "I'm a full-stack developer with expertise in React, Node.js, and MongoDB. I love creating modern, responsive web applications with a focus on user experience and performance.Gaining hands-on experience through freelance tasks, volunteering, and self-initiated projects to better understand how things work in the real world.",
  location: '_',
  skills: [
    'React',
    'TailwindCSS',
    'JavaScript',
    'Node.js',
    'MongoDB',
    'Express.js',
    'VS Code',
    'Postman',
    'Photoshop',
    'Git',
  ],
  social: {
    github: 'https://github.com/HassaanNauman',
    email: 'hassaan.nauman2008@gmail.com',
  },
}

// Projects data - Only 3 projects with same images from portfolio-11
export const PROJECTS: Project[] = [
  {
    _id: 'project-1',
    title: 'AI-Powered Receipt Scanner',
    description:
      'An intelligent receipt scanner that uses machine learning to analyze receipts,  and comprehensive security scanning.',
    shortDescription:
      'An intelligent receipt scanner that uses machine learning to analyze receipts, and automatically extract the data.',
    technologies: ['TailwindCSS', 'JavaScript', 'React', 'Docker'],
    tags: ['TailwindCSS', 'JavaScript', 'React',],
    image: {
      asset: {
        url: '/projects/project-1.webp',
      },
    },
    heroImage: '/projects/project-1.webp',
    githubLink: 'https://github.com/HassaanNauman/SCANKARO',
    previewUrl: 'https://v0-receipt-scanning-app-three.vercel.app/',
    slug: 'ai-powered-code-review-assistant',
  },
  {
    _id: 'project-2',
    title: 'Prayer-Time-Tracker',
    description:
      'A prayer time tracker that tracks the time of each prayer and the duration of each prayer.',
    shortDescription:
      'A prayer time tracker that tracks the time of each prayer and the duration of each prayer.',
    technologies: ['TailwindCSS', 'JavaScript', 'React'],
    tags: ['TailwindCSS', 'JavaScript', 'html', 'css'],
    image: {
      asset: {
        url: '/projects/project-2.webp',
      },
    },
    heroImage: '/projects/project-2.webp',
    githubLink: 'https://github.com/HassaanNauman/Prayer-Time',
    previewUrl: 'https://hassaannauman.github.io/Prayer-Time/login.html',
    slug: 'prayer-time-tracker',
  },
  {
    _id: 'project-3',
    title: 'blood group compatibility checker',
    description:
      'A blood group compatibility checker that checks if a person is compatible with a given blood group.',
    shortDescription:
      'A blood group compatibility checker that checks if a person is compatible with a given blood group.',
    technologies: ['TailwindCSS', 'JavaScript', 'html', 'css'],
    tags: ['TailwindCSS', 'JavaScript', 'html', 'css'],
    image: {
      asset: {
        url: '/projects/project-3.webp',
      },
    },
    heroImage: '/projects/project-3.webp',
    githubLink: 'https://github.com/HassaanNauman/Blood-Group-Compatibility-Checker?tab=readme-ov-file',
    previewUrl: 'https://hassaannauman.github.io/Blood-Group-Compatibility-Checker/',
    slug: 'blood-group-compatibility-checker',
  },
]

