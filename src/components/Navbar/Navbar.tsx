'use client';
import { useState, useEffect, useCallback, type ComponentType, type MouseEvent } from 'react';
import Link from 'next/link';
import LogoMark from '@/components/LogoMark/LogoMark';
import styles from './Navbar.module.css';
import {
    IconHome,
    IconUser,
    IconGrid,
    IconFolder,
    IconBriefcase,
    IconMail,
    IconFile,
} from './NavIcons';

type NavItem = {
    label: string;
    href: string;
    sectionId: string;
    Icon: ComponentType<{ className?: string }>;
};

const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '#hero', sectionId: 'hero', Icon: IconHome },
    { label: 'About', href: '#about', sectionId: 'about', Icon: IconUser },
    { label: 'Skills', href: '#skills', sectionId: 'skills', Icon: IconGrid },
    { label: 'Projects', href: '#projects', sectionId: 'projects', Icon: IconFolder },
    { label: 'Experience', href: '#experience', sectionId: 'experience', Icon: IconBriefcase },
    { label: 'Contact', href: '#contact', sectionId: 'contact', Icon: IconMail },
];

/** Sections used for scroll-spy (hero is default when above About). */
const SCROLL_SPY_IDS = ['about', 'skills', 'projects', 'experience', 'contact'] as const;

function getScrollOffset(): number {
    if (typeof window === 'undefined') return 100;
    const root = document.documentElement;
    const raw = getComputedStyle(root).getPropertyValue('--nav-scroll-offset').trim();
    const parsed = Number.parseFloat(raw);
    return Number.isFinite(parsed) ? parsed : 100;
}

function prefersSmoothScroll(): boolean {
    if (typeof window === 'undefined') return true;
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const updateActiveSection = useCallback(() => {
        const offset = getScrollOffset();
        const y = window.scrollY + offset + 2;
        let current: string = 'hero';
        for (const id of SCROLL_SPY_IDS) {
            const el = document.getElementById(id);
            if (!el) continue;
            const top = el.getBoundingClientRect().top + window.scrollY;
            if (top <= y) current = id;
        }
        setActiveSection((prev) => (prev !== current ? current : prev));
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    useEffect(() => {
        if (typeof document === 'undefined') return;
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 900) setMenuOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
            });
        };
        updateActiveSection();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', updateActiveSection);
        window.addEventListener('hashchange', updateActiveSection);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateActiveSection);
            window.removeEventListener('hashchange', updateActiveSection);
        };
    }, [updateActiveSection]);

    const scrollToSection = useCallback((href: string) => {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({
            behavior: prefersSmoothScroll() ? 'smooth' : 'auto',
            block: 'start',
        });
        window.history.replaceState(null, '', href);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: prefersSmoothScroll() ? 'smooth' : 'auto' });
        window.history.replaceState(null, '', '/');
        setActiveSection('hero');
    }, []);

    const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        scrollToSection(href);
        setMenuOpen(false);
        requestAnimationFrame(() => updateActiveSection());
    };

    const renderNavItem = (item: NavItem) => {
        const isActive = activeSection === item.sectionId;
        const Icon = item.Icon;
        return (
            <li key={item.href}>
                <a
                    href={item.href}
                    className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? 'location' : undefined}
                >
                    <span className={styles.itemGlow} aria-hidden="true" />
                    <span className={styles.itemInner}>
                        <span className={styles.iconSlot}>
                            <span className={styles.iconHalo} aria-hidden="true" />
                            <Icon className={styles.iconSvg} />
                        </span>
                        <span className={styles.navItemLabel}>{item.label}</span>
                    </span>
                </a>
            </li>
        );
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Primary">
            <div className={`container ${styles.shell}`}>
                <div className={styles.dock}>
                    <Link
                        href="/"
                        className={styles.mobileBrand}
                        id="nav-logo"
                        aria-label="Chong Jeng Ying — Home"
                        title="Home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToTop();
                            setMenuOpen(false);
                        }}
                    >
                        <LogoMark size={64} decorative className={styles.brandLogo} />
                    </Link>

                    <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
                        {NAV_ITEMS.map(renderNavItem)}
                        <li className={styles.drawerResume}>
                            <a
                                href="/resume.pdf"
                                className={`${styles.drawerResumeLink} btn btn-outline`}
                                id="nav-resume-mobile"
                            >
                                <IconFile className={styles.drawerResumeIcon} />
                                Resume PDF
                            </a>
                        </li>
                    </ul>

                    <a
                        href="/resume.pdf"
                        className={styles.resumeOrb}
                        id="nav-resume"
                        aria-label="Download resume PDF"
                        title="Resume"
                    >
                        <span className={styles.resumeOrbGlow} aria-hidden="true" />
                        <IconFile className={styles.resumeOrbIcon} />
                    </a>

                    <button
                        type="button"
                        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        id="nav-burger"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
            {menuOpen && (
                <button
                    type="button"
                    className={styles.backdrop}
                    aria-label="Close menu"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </nav>
    );
}
