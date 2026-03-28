import Image from 'next/image';
import styles from './Projects.module.css';

type LiveStatus = 'live' | 'development';

const PROJECTS: Array<{
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: { github?: string; live?: string };
  metric: string;
  liveStatus: LiveStatus;
}> = [
  {
    id: 'proj-1',
    title: 'Dev Encoding Toolkit',
    description:
      'Built a developer encoding toolkit with Next.js, including practical encoding utilities and a deploy-ready frontend workflow.',
    image: '/projects/dev-encoding-toolkit.png',
    tags: ['Next.js', 'TypeScript', 'Developer Tools'],
    links: {
      github: 'https://github.com/chongjengying/dev-encoding-toolkit',
      live: 'https://dev-encoding-toolkit.pages.dev/',
    },
    metric: 'Open-source project',
    liveStatus: 'live',
  },
  {
    id: 'proj-2',
    title: 'Pet E-commerce Platform',
    description:
      'Built a full-stack pet e-commerce platform with product management, shopping cart, and responsive UI. Implemented dynamic product pages and optimized performance for smooth user experience.',
    image: '/projects/pet-ecommerce.png',
    tags: ['Next.js', 'TypeScript', 'E-commerce'],
    links: { github: 'https://github.com/chongjengying/pet-ecommerce' },
    metric: 'Personal project',
    liveStatus: 'development',
  },
  {
    id: 'proj-3',
    title: 'Android Car Park Reservation System',
    description:
      'Developed a full-stack Android app with role-based authentication and concurrent booking logic to prevent double-booking.',
    image: '/projects/carpark-android.png',
    tags: ['Java', 'Firebase Auth', 'Realtime Database'],
    links: { github: 'https://github.com/chongjengying/carparkapp', live: '#' },
    metric: 'Final year project',
    liveStatus: 'development',
  },
  {
    id: 'proj-4',
    title: 'Personal Portfolio Website',
    description:
      'Responsive portfolio built with Next.js and static export, featuring project showcases, experience timeline, and Cloudflare Pages deployment.',
    image: '/projects/portfolio-site.png',
    tags: ['Next.js', 'TypeScript', 'Cloudflare Pages'],
    links: {
      live: 'https://cjy-portfolio.pages.dev/',
    },
    metric: 'This site',
    liveStatus: 'live',
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
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <p className="section-label">What I Have Built</p>
        <h2 className="section-title">
          Selected <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          Open-source tools, full-stack web apps, and mobile projects.
        </p>

        <div className={styles.liveStatusKey} role="note" aria-label="Live status legend">
          <span className={styles.liveStatusKeyTitle}>Live status</span>
          <span className={styles.liveStatusKeyItem}>
            <span className={styles.statusDotLive} aria-hidden />
            Live
          </span>
          <span className={styles.liveStatusKeySep} aria-hidden>
            |
          </span>
          <span className={styles.liveStatusKeyItem}>
            <span className={styles.statusDotDev} aria-hidden />
            In development
          </span>
        </div>

        <div className={styles.featuredGrid}>
          {PROJECTS.map((project) => (
            <div key={project.id} id={project.id} className={`card ${styles.featuredCard}`}>
              <div className={styles.cardMedia}>
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div className={styles.cardTop}>
                <div className={styles.cardTopLeft}>
                  <span
                    className={
                      project.liveStatus === 'live' ? styles.cardStatusLive : styles.cardStatusDev
                    }
                  >
                    {project.liveStatus === 'live' ? (
                      <>
                        <span className={styles.statusDotLive} aria-hidden />
                        Live
                      </>
                    ) : (
                      <>
                        <span className={styles.statusDotDev} aria-hidden />
                        In development
                      </>
                    )}
                  </span>
                  <span className={styles.metricBadge}>{project.metric}</span>
                </div>
                <div className={styles.cardLinks}>
                  {project.links.github && (
                    <a href={project.links.github} className={styles.iconLink} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </a>
                  )}
                  {project.links.live && project.links.live !== '#' && (
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
              {project.links.live && project.links.live !== '#' && (
                <div className={styles.projectActions}>
                  <a
                    href={project.links.live}
                    className={`btn btn-primary ${styles.actionBtn} ${styles.actionBtnPrimary}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.actionBtnLabel}>Demo</span>
                  </a>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className={`btn btn-outline ${styles.actionBtn} ${styles.actionBtnOutline}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.actionBtnLabel}>GitHub</span>
                    </a>
                  )}
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
