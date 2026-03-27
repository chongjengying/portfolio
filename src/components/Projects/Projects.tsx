import styles from './Projects.module.css';

const PROJECTS = [
  {
    id: 'proj-1',
    title: 'TEA Incident Log Analysis Workflow',
    description:
      'Built a repeatable Linux-based troubleshooting workflow using grep, tail, and awk to analyze production logs and speed up root cause identification for critical incidents.',
    tags: ['Linux', 'Bash', 'Production Support', 'Incident Management'],
    featured: true,
    links: { github: 'https://github.com/chongjengying', live: '#' },
    metric: '25% faster RCA',
  },
  {
    id: 'proj-2',
    title: 'SQL Reconciliation Reporting',
    description:
      'Developed SQL-based reconciliation reports to identify orphan orders and data mismatches, improving shipment consistency and reducing operational delays.',
    tags: ['SQL', 'Oracle', 'SQL Server', 'Data Validation'],
    featured: true,
    links: { github: 'https://github.com/chongjengying', live: '#' },
    metric: '15% fewer delayed shipments',
  },
  {
    id: 'proj-3',
    title: "Touch 'n Go Toll Integration Support",
    description:
      'Supported integration rollout for automated toll expense tracking between transport operations and enterprise systems, reducing manual reconciliation issues.',
    tags: ['Integration Support', 'TEA', 'Cross-border Logistics'],
    featured: true,
    links: { github: 'https://github.com/chongjengying', live: '#' },
    metric: '20% fewer reconciliation errors',
  },
  {
    id: 'proj-7',
    title: 'Dev Encoding Toolkit',
    description:
      'Built a developer encoding toolkit with Next.js, including practical encoding utilities and a deploy-ready frontend workflow.',
    tags: ['Next.js', 'TypeScript', 'Developer Tools'],
    featured: false,
    links: {
      github: 'https://github.com/chongjengying/dev-encoding-toolkit',
      live: 'https://dev-encoding-toolkit.pages.dev/',
    },
    metric: 'Open-source project',
  },
  {
    id: 'proj-8',
    title: 'Pet E-commerce Platform',
    description:
      'Developed a pet e-commerce platform for booking and selling pet products such as food, snacks, and accessories, with responsive product pages and shopping flows.',
    tags: ['Next.js', 'TypeScript', 'E-commerce'],
    featured: false,
    links: { github: 'https://github.com/chongjengying/pet-ecommerce' },
    metric: 'Personal project',
  },
  {
    id: 'proj-4',
    title: 'Angular UI Enhancements for TEA',
    description:
      'Implemented front-end improvements in Angular to improve usability for operation teams while maintaining production stability and release quality.',
    tags: ['Angular', 'TypeScript', 'UI Enhancement'],
    featured: false,
    links: { github: 'https://github.com/chongjengying' },
    metric: 'Improved operator UX',
  },
  {
    id: 'proj-5',
    title: 'Android Car Park Reservation System',
    description:
      'Developed a full-stack Android app with role-based authentication and concurrent booking logic to prevent double-booking.',
    tags: ['Java', 'Firebase Auth', 'Realtime Database'],
    featured: false,
    links: { github: 'https://github.com/chongjengying', live: '#' },
    metric: 'Final year project',
  },
  {
    id: 'proj-6',
    title: 'Programming Curriculum for Young Learners',
    description:
      'Designed project-based lesson tracks in Roblox, Python, and Minecraft to simplify core programming concepts for students aged 8 to 16.',
    tags: ['Python', 'Roblox Studio', 'Curriculum Design'],
    featured: false,
    links: { github: 'https://github.com/chongjengying' },
    metric: 'Part-time teaching',
  },
];

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const other = PROJECTS.filter((p) => !p.featured);

  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-label">What I Have Built</p>
        <h2 className="section-title">
          Selected <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          Software engineering and operations-focused work from enterprise support and project delivery.
        </p>

        <div className={styles.featuredGrid}>
          {featured.map((project) => (
            <div key={project.id} id={project.id} className={`card ${styles.featuredCard}`}>
              <div className={styles.cardTop}>
                <span className={styles.metricBadge}>{project.metric}</span>
                <div className={styles.cardLinks}>
                  {project.links.github && (
                    <a href={project.links.github} className={styles.iconLink} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} className={styles.iconLink} aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>

              <div className={styles.cardTags}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.links.live && project.links.live !== '#' && project.links.github && (
                <div className={styles.projectActions}>
                  <a
                    href={project.links.live}
                    className={`btn btn-primary ${styles.actionBtn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={project.links.github}
                    className={`btn btn-outline ${styles.actionBtn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <h3 className={styles.otherHeading}>More Engineering Work</h3>
        <div className={styles.otherGrid}>
          {other.map((project) => (
            <div key={project.id} id={project.id} className={`card ${styles.otherCard}`}>
              <div className={styles.cardTop}>
                <span className={styles.folderIcon}>[]</span>
                <div className={styles.cardLinks}>
                  {project.links.github && (
                    <a href={project.links.github} className={styles.iconLink} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} className={styles.iconLink} aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
              <h3 className={styles.otherTitle}>{project.title}</h3>
              <p className={styles.otherDesc}>{project.description}</p>
              <div className={styles.cardTags}>
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.links.live && project.links.live !== '#' && project.links.github && (
                <div className={styles.projectActions}>
                  <a
                    href={project.links.live}
                    className={`btn btn-primary ${styles.actionBtn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={project.links.github}
                    className={`btn btn-outline ${styles.actionBtn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.moreLink}>
          <a href="https://github.com/chongjengying" className="btn btn-outline" target="_blank" rel="noopener noreferrer" id="projects-github-more">
            <GitHubIcon /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
