'use client';
import styles from './Hero.module.css';
import { useEffect, useRef, useState } from 'react';

const ROLES = [
  'Application Support Engineer',
  'Backend Engineer',
  'Software Engineer',
  'ERP Systems Specialist',
  'Angular and Java Developer',
  'Logistics Systems Specialist',
];

const FOCUS_AREAS = [
  'Transport Enterprise Application (TEA) support and enhancement',
  'Root cause analysis and production incident resolution',
  'Workflow and data reliability improvements with SQL and Java',
  'Improve incident resolution time (MTTR), reduce reconciliation errors, and ensure high availability',
];

const STATS = [
  { value: '3+', label: 'Years in Software and Support' },
  { value: '25%', label: 'Faster P1 and P2 RCA Time' },
  { value: '15%', label: 'Fewer Delayed Shipments' },
  { value: '20%', label: "Lower TNG Reconciliation Errors" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!deleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 50);
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 2200);
      }
    } else if (displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % ROLES.length);
      }, 80);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, deleting, roleIndex]);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.blob} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.heroShell}>
          <div>
            <h1 className={styles.heading}>
              <span className={styles.hi}>Hi, I am</span>
              <span className={styles.name}>Chong Jeng Ying</span>
              <span className={styles.roleRow}>
                <span className={styles.role}>{displayed}</span>
                <span className={styles.cursor} aria-hidden="true">|</span>
              </span>
            </h1>

            <p className={styles.bio}>
              Software engineering professional with hands-on experience supporting and enhancing
              enterprise logistics systems. I work across Angular front-end changes, Java backend
              troubleshooting, and SQL data operations to deliver stable, scalable, and maintainable solutions—
              with ongoing emphasis on improving incident resolution time (MTTR), reducing reconciliation errors,
              and ensuring high availability.
            </p>

            <div className={styles.badges}>
              <span className="tag">Angular + Java</span>
              <span className="tag">SQL + Linux</span>
              <span className="tag">TEA + WMS Operations</span>
            </div>

            <div className={styles.actions}>
              <a href="#projects" className="btn btn-primary" id="hero-cta-projects">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline" id="hero-cta-contact">
                Contact Me
              </a>
            </div>

            <div className={styles.stats}>
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className={styles.sidePanel}>
            <p className={styles.panelLabel}>Current Focus</p>
            <ul className={styles.focusList}>
              {FOCUS_AREAS.map((item) => (
                <li key={item} className={styles.focusItem}>
                  <span className={styles.focusBullet} />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
