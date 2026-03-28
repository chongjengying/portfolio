type IconProps = { className?: string };

const stroke = 1.75;

export function IconHome({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconUser({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth={stroke} />
      <path
        d="M6 20v-1c0-2.5 2-4.5 6-4.5s6 2 6 4.5v1"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconGrid({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth={stroke} />
      <circle cx="16" cy="8" r="2" stroke="currentColor" strokeWidth={stroke} />
      <circle cx="8" cy="16" r="2" stroke="currentColor" strokeWidth={stroke} />
      <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth={stroke} />
    </svg>
  );
}

export function IconFolder({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8a2 2 0 0 1 2-2h3l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBriefcase({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 10h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 14h16" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6h16v12H4V6z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconFile({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7l-5-5z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
      <path d="M14 2v5h5" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" />
    </svg>
  );
}
