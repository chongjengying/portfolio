'use client';
import styles from './About.module.css';
import { useInView } from '@/hooks/useInView';

const INFO = [
  { label: 'Location', value: 'Johor Bahru, Johor' },
  { label: 'Experience', value: '3+ Years' },
  { label: 'Availability', value: 'Open to New Roles' },
  { label: 'Primary Focus', value: 'Enterprise Logistics Systems' },
];

export default function About() {
  const { ref: sectionRef, inView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="section" id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.left} ${inView ? styles.slideInLeft : styles.hidden}`}>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Building reliable operations through <span>software and system support</span>
            </h2>

            <p className={styles.para}>
              I am a software engineering professional experienced in supporting and improving Transport
              Enterprise Applications (TEA) and Warehouse Management Systems (WMS) in high-availability
              logistics environments.
            </p>
            <p className={styles.para}>
              My day-to-day work includes requirement gathering, Angular enhancements, backend root cause
              analysis with Java Spring Boot, and SQL-driven reconciliation and reporting improvements.
            </p>
            <p className={styles.para}>
              I focus on reducing incident recovery time, improving delivery continuity, and translating
              business and operational needs into practical technical solutions.
            </p>

            <div className={styles.infoGrid}>
              {INFO.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`${styles.infoItem} ${inView ? styles.infoReveal : styles.hidden}`}
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <span className={styles.infoLabel}>{label}</span>
                  <span className={styles.infoValue}>{value}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn btn-primary"
              id="about-cta"
              style={{
                marginTop: '8px',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s',
              }}
            >
              Let&apos;s Connect
            </a>
          </div>

          <div className={`${styles.right} ${inView ? styles.slideInRight : styles.hidden}`}>
            <div className={styles.avatarFrame}>
              <div className={styles.avatarBg}>
                <div className={styles.avatarInner}>
                  <svg viewBox="0 0 200 200" className={styles.avatarSvg}>
                    <circle cx="100" cy="75" r="42" fill="#00ff8820" stroke="#00ff8840" strokeWidth="1.5" />
                    <text x="100" y="90" textAnchor="middle" fontSize="52" fill="#00ff88">CJY</text>
                    <ellipse cx="100" cy="165" rx="58" ry="32" fill="#00ff8815" />
                  </svg>
                </div>
              </div>
              <div className={styles.floatBadge1}>
                <span className={styles.badgeVal}>Application Support</span>
                <span className={styles.badgeSub}>TEA, WMS, Incident Response</span>
              </div>
              <div className={styles.floatBadge2}>
                <span className={styles.badgeVal}>Development</span>
                <span className={styles.badgeSub}>Angular, Java Spring Boot, SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
