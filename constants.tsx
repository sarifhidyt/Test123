import { 
  Code2, 
  Palette, 
  Database, 
  Terminal, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail,
  Layout,
  Smartphone,
  Server,
  Cpu
} from 'lucide-react';
import { NavItem, Project, Skill, Experience, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React.js', icon: Code2, level: 90, category: 'Frontend' },
  { name: 'TypeScript', icon: Terminal, level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: Palette, level: 95, category: 'Frontend' },
  { name: 'Node.js', icon: Server, level: 75, category: 'Backend' },
  { name: 'PostgreSQL', icon: Database, level: 70, category: 'Backend' },
  { name: 'UI/UX Design', icon: Layout, level: 80, category: 'Design' },
  { name: 'Responsive Dev', icon: Smartphone, level: 95, category: 'Frontend' },
  { name: 'Git & Workflow', icon: Cpu, level: 85, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive analytics dashboard for online retailers featuring real-time data visualization using Recharts and interactive data tables.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 2,
    title: 'AI Task Manager',
    description: 'Smart task management application that uses AI to categorize and prioritize daily tasks for improved productivity.',
    tags: ['Next.js', 'OpenAI API', 'Framer Motion', 'Prisma'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: 3,
    title: 'Modern Landing Page',
    description: 'High-conversion landing page with complex scroll animations, 3D elements, and optimized performance metrics.',
    tags: ['React', 'Three.js', 'GSAP', 'Vite'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    demoUrl: '#',
    repoUrl: '#'
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { platform: 'Instagram', url: 'https://instagram.com', icon: Instagram },
  { platform: 'Email', url: 'mailto:syarifhidyt@gmail.com', icon: Mail },
];