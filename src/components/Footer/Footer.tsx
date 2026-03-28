import Link from 'next/link';
import LogoMark from '@/components/LogoMark/LogoMark';
import { IconGithub, IconEnvelope, IconPhone, IconLinkedIn } from './FooterIcons';
import styles from './Footer.module.css';

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/chongjengying',
    Icon: IconGithub,
    id: 'footer-github',
  },
  {
    label: 'Email',
    href: 'mailto:jengying0503@gmail.com',
    Icon: IconEnvelope,
    id: 'footer-email',
  },
  {
    label: 'Phone',
    href: 'tel:+601127812878',
    Icon: IconPhone,
    id: 'footer-phone',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chongjengying',
    Icon: IconLinkedIn,
    id: 'footer-linkedin',
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.glowRail} aria-hidden="true" />
      <div className={styles.mesh} aria-hidden="true" />

      <div className={`container ${styles.shell}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logoWrap} aria-label="Chong Jeng Ying home">
            <LogoMark size={36} decorative />
          </Link>
          <div className={styles.brandText}>
            <p className={styles.name}>Chong Jeng Ying</p>
            <p className={styles.tagline}>Software engineer · Enterprise logistics &amp; application support</p>
          </div>
          <div className={styles.copyRow}>
            <span>© {year} Chong Jeng Ying</span>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.built}>Crafted with Next.js</span>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.connectLabel}>Connect</p>
          <div className={styles.socials}>
            {SOCIALS.map(({ label, href, Icon, id }) => (
              <a
                key={label}
                href={href}
                className={styles.socialLink}
                aria-label={label}
                id={id}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className={styles.socialGlow} aria-hidden="true" />
                <Icon className={styles.socialIcon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
