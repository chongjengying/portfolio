'use client';
import styles from './Skills.module.css';
import { useInView } from '@/hooks/useInView';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

const SKILL_GROUPS = [
  {
    title: 'Application Development',
    icon: 'AD',
    skills: [
      { name: 'Angular', level: 86 },
      { name: 'Java / Spring Boot', level: 84 },
      { name: 'Flutter', level: 75 },
      { name: 'RESTful API Development', level: 82 },
    ],
  },
  {
    title: 'Database and Data Operations',
    icon: 'DB',
    skills: [
      { name: 'SQL (Oracle / SQL Server)', level: 88 },
      { name: 'MySQL', level: 82 },
      { name: 'Database Design and Modeling', level: 84 },
      { name: 'Performance Tuning', level: 80 },
    ],
  },
  {
    title: 'Production Support',
    icon: 'PS',
    skills: [
      { name: 'L2 / L3 Application Support', level: 90 },
      { name: 'Root Cause Analysis', level: 88 },
      { name: 'Incident Troubleshooting', level: 89 },
      { name: 'SLA and MTTR Management', level: 85 },
    ],
  },
  {
    title: 'Tools and Workflow',
    icon: 'TW',
    skills: [
      { name: 'Linux Command-line', level: 86 },
      { name: 'Git / GitHub', level: 84 },
      { name: 'Unit Testing and UAT Support', level: 83 },
      { name: 'SDLC Collaboration', level: 85 },
    ],
  },
];

const TOOLS = [
  'Angular',
  'Spring Boot',
  'React',
  'Flutter',
  'Node.js',
  'Firebase',
  'Power BI',
  'GitHub',
  'Linux',
  'Adobe Photoshop',
  'Roblox Studio',
  'Minecraft Education',
];

function strengthLabel(level: number): string {
  if (level >= 87) return 'Strong';
  if (level >= 80) return 'Proficient';
  return 'Familiar';
}

const TECH_ITEMS = [
  { src: '/logos/react.png', label: 'React' },
  { src: '/logos/nextjs1.png', label: 'Next.js' },
  { src: '/logos/vsc.png', label: 'VS Code' },
  { src: '/logos/html5.svg', label: 'HTML' },
  { src: '/logos/css3.svg', label: 'CSS' },
  { src: '/logos/nodejs.png', label: 'Node.js' },
  { src: '/logos/python.png', label: 'Python' },
  { src: '/logos/docker.png', label: 'Docker' },
  { src: '/logos/git.png', label: 'Git' },
  { src: '/logos/linux.png', label: 'Linux' },
  { src: '/logos/npm.svg', label: 'NPM' },
  { src: '/logos/angular.svg', label: 'Angular' },
];

export default function Skills() {
  const { ref: sectionRef, inView } = useInView<HTMLElement>({ threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        duration: 14,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  }, [controls]);

  const techTrack = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section ref={sectionRef} className={`section ${styles.section}`} id="skills">
      <div className="container">
        <div className={inView ? styles.headerReveal : styles.hidden}>
          <p className="section-label">What I Build With</p>
          <h2 className="section-title">
            Engineering <span>Stack</span>
          </h2>
          <p className="section-subtitle">
            From production support and enterprise logistics apps to side projects—the stack I use to build, ship, and
            keep systems reliable.
          </p>
        </div>

        <div className={styles.groups}>
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.title}
              className={`card ${styles.group} ${inView ? styles.cardReveal : styles.hidden}`}
              style={{ animationDelay: `${0.12 + gi * 0.1}s` }}
            >
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon}>{group.icon}</span>
                <h3 className={styles.groupTitle}>{group.title}</h3>
              </div>
              <div className={styles.bars}>
                {group.skills.map((skill, si) => (
                  <div key={skill.name} className={styles.barItem}>
                    <div className={styles.barMeta}>
                      <span className={styles.barName}>{skill.name}</span>
                      <span className={styles.barStrength}>{strengthLabel(skill.level)}</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        style={{
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${0.3 + gi * 0.1 + si * 0.08}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.toolsSection} ${inView ? styles.toolsReveal : styles.hidden}`}>
          <p className={styles.toolsTitle}>Tooling and Platforms</p>
          <div className={styles.toolsGrid}>
            {TOOLS.map((tool, i) => (
              <span
                key={tool}
                className={`tag ${styles.tool} ${inView ? styles.toolReveal : styles.hidden}`}
                style={{ animationDelay: `${0.2 + i * 0.04}s` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.techShowcase}>
          <div className={styles.techHeadingDecor} aria-hidden="true">
            <span className={styles.decorDot} />
            <span className={styles.decorLine} />
            <span className={styles.decorDot} />
          </div>
          <p className={styles.techTitle}>Technologies I&apos;ve worked with in various projects</p>

          <div className={styles.carouselViewport}>
            <motion.div
              className={styles.techTrack}
              animate={controls}
              onHoverStart={() => controls.stop()}
              onHoverEnd={() => {
                controls.start({
                  x: ['0%', '-50%'],
                  transition: {
                    duration: 14,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                  },
                });
              }}
            >
              {techTrack.map((item, index) => (
                <div key={`${item.label}-${index}`} className={styles.techItem}>
                  <span className={styles.skillImage}>
                    <Image src={item.src} alt={`${item.label} logo`} width={78} height={78} />
                  </span>
                  <span className={styles.techName}>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className={styles.progressTrack} aria-hidden="true">
            <div className={styles.progressThumb} />
          </div>
        </div>
      </div>
    </section>
  );
}
