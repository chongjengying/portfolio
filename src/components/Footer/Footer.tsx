import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="divider" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.logo}>
            <span className={styles.logoSymbol}>&lt;</span>
            <span>CJY</span>
            <span className={styles.logoSymbol}>/&gt;</span>
          </span>
          <p className={styles.copy}>
            Copyright {year} Chong Jeng Ying. Built with Next.js.
          </p>
        </div>

        <div className={styles.socials}>
          {[
            { label: 'GitHub', href: 'https://github.com/chongjengying', icon: 'GH' },
            { label: 'Email', href: 'mailto:jengying0503@gmail.com', icon: 'EM' },
            { label: 'Phone', href: 'tel:+601127812878', icon: 'PH' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={styles.social}
              aria-label={social.label}
              id={`footer-${social.label.toLowerCase()}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
