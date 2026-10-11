import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  firebase,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  nestnav,
  calendar,
  nonogram,
  algorithm,
} from '../assets';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full Stack Development',
    icon: frontend,
  },
  {
    title: 'API Integrations',
    icon: backend,
  },
  {
    title: 'Interactive UI',
    icon: ux,
  },
  {
    title: 'Algorithm Implementation',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'NestNav',
    description: 'A comprehensive navigation and mapping solution. (Add your description here!)',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: nestnav,
    repo: 'https://github.com/jayzba/nestnav',
    demo: 'https://nest-nav-psi.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'YouTube Calendar',
    description: 'A robust scheduling and time-management application. (Add your description here!)',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: calendar,
    repo: 'https://github.com/jayzba/YouTube-Subscription-Calendar',
    demo: 'https://youtube-subscription-calendar.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Nonogram Solver',
    description: 'An interactive logic puzzle game built for the web. (Add your description here!)',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nonogram,
    repo: 'https://github.com/jayzba/Nonogram-Solver',
    demo: 'https://nonogram-solver-snowy.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'Algorithm Visualizer',
    description: 'A visualizer for complex algorithms and data structures. (Add your description here!)',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'algorithms',
        color: 'green-text-gradient',
      },
      {
        name: 'data-structures',
        color: 'pink-text-gradient',
      },
    ],
    image: algorithm,
    repo: 'https://github.com/jayzba/Algorithm-Visualizer',
    demo: 'https://algorithm-visualizer-bay-seven.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
