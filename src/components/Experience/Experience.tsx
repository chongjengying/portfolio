import styles from './Experience.module.css';

const EXPERIENCES = [
  {
    id: 'exp-1',
    role: 'Application Support Engineer',
    company: 'Tiong Nam Logistics Solutions Sdn. Bhd.',
    period: 'Dec 2022 – Present',
    type: 'Full-time',
    highlights: [
      'Delivered Level 2 & Level 3 support for the Transport Enterprise Application (TEA), ensuring high availability across Order Fulfillment and Driver Logsheet modules in a production logistics environment.',
      'Led root cause analysis for critical production issues, leveraging SQL (MySQL) and Linux log analysis to identify system defects and improve incident resolution time (MTTR).',
      'Implemented front-end enhancements using Angular and supported backend debugging in Java Spring Boot, improving system usability and operational efficiency.',
      'Developed and optimized SQL reconciliation reports to enhance shipment accuracy and reduce operational discrepancies.',
      'Collaborated with cross-functional teams (developers, operations, and users) during UAT and production releases, ensuring smooth deployment and minimal system downtime.',
      "Supported system integrations (Touch 'n Go toll system), reducing reconciliation errors and improving financial tracking for transport operations.",
      'Monitored application performance and system logs, proactively identifying potential issues and maintaining SLA compliance.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Helpdesk Consultant',
    company: 'CRT - Insights Technology Sdn. Bhd.',
    period: 'Dec 2021 - Nov 2022',
    type: 'Full-time',
    highlights: [
      'Delivered first-line support for Microsoft Dynamics 365 Business Central and NAV clients.',
      'Diagnosed and resolved technical and functional ERP issues through structured root cause analysis.',
      'Managed end-to-end support cycles and translated client requirements into practical ERP workflows.',
    ],
  },
  {
    id: 'exp-3',
    role: 'Online Private Programming Tutor',
    company: 'Codekidz by EduWel Sdn. Bhd.',
    period: 'Jan 2023 - Dec 2025',
    type: 'Part-time',
    highlights: [
      'Designed and delivered engaging coding lessons for students aged 8 to 16.',
      'Guided project-based learning using Roblox Studio, Python, Minecraft, and beginner-friendly programming tools.',
      'Built student confidence through collaborative debugging and interactive coding challenges.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience" style={{ background: 'var(--black-soft)' }}>
      <div className="container">
        <p className="section-label">Career Timeline</p>
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>
        <p className="section-subtitle">
          Experience across enterprise application support, software development, and technical training.
        </p>

        <div className={styles.timeline}>
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} id={exp.id} className={styles.entry}>
              <div className={styles.spine}>
                <div className={styles.dot} />
                {index < EXPERIENCES.length - 1 && <div className={styles.line} />}
              </div>

              <div className={`card ${styles.content}`}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <span className={styles.company}>@ {exp.company}</span>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className="tag">{exp.type}</span>
                  </div>
                </div>

                <ul className={styles.highlights}>
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className={styles.highlight}>
                      <span className={styles.bulletArrow}>&gt;</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
