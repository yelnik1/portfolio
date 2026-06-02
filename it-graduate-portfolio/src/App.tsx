/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Server,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Menu,
  X,
  Download,
  Award,
  Calendar,
  Building2,
} from 'lucide-react';

import heroImage from './assets/ylnk.jpg';
import aboutImage1 from './assets/knly1.jpg';
import aboutImage2 from './assets/knly2.jpg';
import aboutImage3 from './assets/knly3.jpg';
import aboutImage4 from './assets/knly4.jpg';

import projectImage1 from './assets/project-1.png';
import projectImage2 from './assets/project-2.png';
import projectImage3 from './assets/project-3.png';

import certImage1 from './assets/cert1.jpg';
import certImage2 from './assets/cert2.jpg';
import certImage3 from './assets/cert3.jpg';
import certImage4 from './assets/cert4.jpg';
import certImage5 from './assets/5.jpg';
import certImage6 from './assets/6.jpg';
import certImage7 from './assets/7.jpg';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
}

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  icon: React.ReactNode;
}

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
}

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
  image: string;
  icon: React.ReactNode;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store built with Laravel and React. Features include user authentication, product management, and Stripe integration.',
    tags: ['Laravel', 'React', 'MySQL', 'Tailwind'],
    image: projectImage1,
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Management API',
    description:
      'A robust RESTful API for managing team tasks, featuring JWT authentication and automated testing with PHPUnit.',
    tags: ['PHP', 'Laravel', 'Redis', 'Docker'],
    image: projectImage2,
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio built with React and Framer Motion to showcase my journey as an IT graduate.',
    tags: ['React', 'TypeScript', 'Motion', 'Vite'],
    image: projectImage3,
    link: '#',
    github: '#',
  },
];

const SKILLS: Skill[] = [
  { name: 'React', category: 'Frontend', icon: <Layout className="w-4 h-4" /> },
  { name: 'TypeScript', category: 'Frontend', icon: <Code2 className="w-4 h-4" /> },
  { name: 'Tailwind CSS', category: 'Frontend', icon: <Layout className="w-4 h-4" /> },
  { name: 'PHP / Laravel', category: 'Backend', icon: <Server className="w-4 h-4" /> },
  { name: 'Node.js', category: 'Backend', icon: <Server className="w-4 h-4" /> },
  { name: 'MySQL', category: 'Database', icon: <Database className="w-4 h-4" /> },
  { name: 'PostgreSQL', category: 'Database', icon: <Database className="w-4 h-4" /> },
  { name: 'Git / GitHub', category: 'Tools', icon: <Code2 className="w-4 h-4" /> },
  { name: 'Docker', category: 'Tools', icon: <Server className="w-4 h-4" /> },
];

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    role: 'Full-Stack Developer Intern',
    period: 'June 2024 - December 2024',
    description: [
      'Assisted in the development of an internal CRM system using Laravel and React.',
      'Optimized database queries, reducing page load times by 30%.',
      'Collaborated with senior developers to implement RESTful APIs and front-end components.',
    ],
  },
  {
    id: 2,
    company: 'University IT Department',
    role: 'Student IT Support',
    period: 'September 2022 - May 2024',
    description: [
      'Provided technical support for university staff and students.',
      'Maintained and updated department website using PHP and MySQL.',
      'Troubleshot network and hardware issues across campus labs.',
    ],
  },
];

const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: 'Laravel Advanced Development',
    issuer: 'Udemy',
    date: '2024',
    link: certImage1,
    image: certImage1,
    icon: <Server className="w-5 h-5" />,
  },
  {
    id: 2,
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Coursera',
    date: '2023',
    link: certImage2,
    image: certImage2,
    icon: <Layout className="w-5 h-5" />,
  },
  {
    id: 3,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    link: certImage3,
    image: certImage3,
    icon: <Database className="w-5 h-5" />,
  },
  {
    id: 4,
    title: 'Certificate 4',
    issuer: 'Issuer',
    date: '2024',
    link: certImage4,
    image: certImage4,
    icon: <Award className="w-5 h-5" />,
  },
  {
    id: 5,
    title: 'Certificate 5',
    issuer: 'Issuer',
    date: '2024',
    link: certImage5,
    image: certImage5,
    icon: <Award className="w-5 h-5" />,
  },
  {
    id: 6,
    title: 'Certificate 6',
    issuer: 'Issuer',
    date: '2024',
    link: certImage6,
    image: certImage6,
    icon: <Award className="w-5 h-5" />,
  },
  {
    id: 7,
    title: 'Certificate 7',
    issuer: 'Issuer',
    date: '2024',
    link: certImage7,
    image: certImage7,
    icon: <Award className="w-5 h-5" />,
  },
];

// --- Components ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-600">Fullstack Developer</span>
            <span className="text-2xl font-light text-slate-900">/TechVA</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({
  children,
  subtitle,
}: {
  children: React.ReactNode;
  subtitle?: string;
}) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-slate-900 mb-2"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-500 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      className="h-1 bg-blue-600 mt-4 rounded-full"
    />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-blue-100 selection:text-blue-900">
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/30 blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-blue-50/40 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[35%] h-[35%] rounded-full bg-blue-100/20 blur-[110px]" />
      </div>

      <Navbar />

      <main>
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-linear-to-bl from-blue-100/50 via-blue-50/20 to-transparent skew-x-12 transform origin-top-right" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                  Available for Hire
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                  Hi, I'm <span className="text-blue-600">Kinley Cartagenas</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                  A passionate IT Graduate specializing in Full-Stack Development with a strong
                  focus on Laravel and React. Building scalable, user-centric web applications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
                  >
                    Get in Touch <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center gap-2"
                  >
                    Download CV <Download className="w-4 h-4" />
                  </a>
                </div>

                <div className="mt-12 flex items-center gap-6">
                  <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors" aria-label="GitHub">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors" aria-label="Email">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src={heroImage}
                    alt="Kinley Cartagenas"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10 opacity-20 blur-2xl" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400 rounded-full -z-10 opacity-20 blur-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <SectionHeading subtitle="My journey from a student to a developer.">
                  About Me
                </SectionHeading>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    I recently graduated with a Bachelor's degree in Information Technology, where
                    I developed a deep interest in web technologies and software engineering. My
                    academic background provided me with a solid foundation in computer science
                    principles, which I've applied to numerous personal and academic projects.
                  </p>
                  <p>
                    I am particularly drawn to the Laravel ecosystem for its elegant syntax and
                    powerful features, and I love pairing it with modern frontend frameworks like
                    React to create seamless user experiences.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Education</h4>
                        <p className="text-sm">B.S. Information Technology</p>
                        <p className="text-xs text-slate-400">Class of 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Experience</h4>
                        <p className="text-sm">IT Intern @ TechCorp</p>
                        <p className="text-xs text-slate-400">6 Months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <img src={aboutImage1} className="rounded-2xl shadow-lg" alt="Coding" />
                  <img src={aboutImage2} className="rounded-2xl shadow-lg" alt="Setup" />
                </div>
                <div className="space-y-4">
                  <img src={aboutImage3} className="rounded-2xl shadow-lg" alt="Team" />
                  <img src={aboutImage4} className="rounded-2xl shadow-lg" alt="Design" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 bg-linear-to-b from-blue-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading subtitle="The technologies I use to bring ideas to life.">
              Technical Skills
            </SectionHeading>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(['Frontend', 'Backend', 'Database', 'Tools'] as const).map((category) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full" />
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {SKILLS.filter((s) => s.category === category).map((skill) => (
                      <div key={skill.name} className="flex items-center gap-3 text-slate-600">
                        <div className="text-blue-500">{skill.icon}</div>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading subtitle="My professional journey and internships.">
              Work Experience
            </SectionHeading>

            <div className="space-y-8">
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-slate-100 hover:border-blue-200 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full" />
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-blue-600 font-medium">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm bg-white px-3 py-1 rounded-full border border-slate-100">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading subtitle="A collection of projects I've worked on during my studies and beyond.">
              Featured Projects
            </SectionHeading>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          className="p-2 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
                          aria-label={`Open ${project.title}`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                        {project.github && (
                          <a
                            href={project.github}
                            className="p-2 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
                            aria-label={`Open ${project.title} GitHub`}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="py-24 bg-linear-to-t from-blue-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading subtitle="Professional certifications and achievements.">
              Certificates
            </SectionHeading>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATES.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-44 object-cover rounded-xl mb-4 border border-slate-200"
                  />
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4">
                        {cert.issuer} • {cert.date}
                      </p>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                      >
                        View Certificate <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Let's build something <span className="text-blue-400">extraordinary</span>{' '}
                  together.
                </h2>
                <p className="text-slate-400 text-lg mb-12 max-w-md">
                  I'm currently looking for new opportunities. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email me at</p>
                      <p className="font-semibold">kinley.cartagenas.dvo@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Connect on</p>
                      <p className="font-semibold">linkedin.com/in/kcartagenas/</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="text-xl font-bold text-blue-600">IT</span>
            <span className="text-xl font-light text-slate-900">Portfolio</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Kinley Cartagenas. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}