'use client';

import { useId } from 'react';
import styles from './LogoMark.module.css';

type LogoMarkProps = {
  className?: string;
  /** Pixel width/height (square). */
  size?: number;
  /** When true, hide from assistive tech (e.g. inside a link that already has a name). */
  decorative?: boolean;
  'aria-label'?: string;
};

export default function LogoMark({
  className,
  size = 28,
  decorative,
  'aria-label': ariaLabel = 'Chong Jeng Ying',
}: LogoMarkProps) {
  const uid = useId().replace(/:/g, '');
  const patternId = `lm-scan-${uid}`;
  const clipId = `lm-clip-${uid}`;

  return (
    <svg
      className={`${styles.svg} ${className ?? ''}`}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : ariaLabel}
    >
      {!decorative ? <title>{ariaLabel}</title> : null}
      <defs>
        <pattern id={patternId} width="5" height="4" patternUnits="userSpaceOnUse">
          <rect width="5" height="4" className={styles.scanCell} />
          <line
            x1="0"
            y1="2"
            x2="5"
            y2="2"
            className={styles.scanLine}
            strokeWidth="0.7"
          />
        </pattern>
        <clipPath id={clipId}>
          <circle cx="32" cy="30" r="24.75" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <rect x="4" y="4" width="56" height="52" fill={`url(#${patternId})`} />
      </g>

      <circle
        cx="32"
        cy="30"
        r="24.75"
        fill="none"
        className={styles.ring}
        strokeWidth="1.35"
      />

      <text
        x="32"
        y="37.5"
        className={styles.cjyText}
        textAnchor="middle"
        style={{ letterSpacing: '-0.07em' }}
      >
        CJY
      </text>

      <ellipse cx="32" cy="55.5" rx="21" ry="3.8" className={styles.reflection} />
    </svg>
  );
}
