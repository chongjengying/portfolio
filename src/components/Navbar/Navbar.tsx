'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -40% 0px' }
        );
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.logo} id="nav-logo">
                    <span className={styles.logoSymbol}>&lt;</span>
                    <span className={styles.logoText}>CJY</span>
                    <span className={styles.logoSymbol}>/&gt;</span>
                </Link>

                <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
                    {NAV_LINKS.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`${styles.link} ${activeSection === link.href.replace('#', '') ? styles.active : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className={styles.linkNum}>0{NAV_LINKS.indexOf(link) + 1}.</span>
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="/resume.pdf" className={`btn btn-outline ${styles.resumeBtn}`} id="nav-resume">
                            Resume
                        </a>
                    </li>
                </ul>

                <button
                    className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    id="nav-burger"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
}
