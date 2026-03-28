'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

const CONTACT_ITEMS = [
  { slug: 'email', icon: 'EM', label: 'Email', value: 'jengying0503@gmail.com', href: 'mailto:jengying0503@gmail.com' },
  { slug: 'phone', icon: 'PH', label: 'Phone', value: '011-2781 2878', href: 'tel:+601127812878' },
  { slug: 'github', icon: 'GH', label: 'GitHub', value: 'github.com/chongjengying', href: 'https://github.com/chongjengying' },
  {
    slug: 'linkedin',
    icon: 'LI',
    label: 'LinkedIn',
    value: 'linkedin.com/in/chongjengying',
    href: 'https://www.linkedin.com/in/chongjengying',
  },
  { slug: 'location', icon: 'LC', label: 'Location', value: 'Johor Bahru, Johor', href: 'https://maps.google.com/?q=Johor+Bahru+Johor' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('sent');
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">
          Let&apos;s Build <span>Reliable Solutions</span>
        </h2>
        <p className="section-subtitle">
          I welcome messages about roles, collaborations, and technical discussions.
        </p>

        <div className={styles.grid}>
          <div className={styles.info}>
            {CONTACT_ITEMS.map((item) => (
              <a key={item.slug} href={item.href} className={styles.contactCard} id={`contact-${item.slug}`}>
                <span className={styles.contactIcon}>{item.icon}</span>
                <div>
                  <span className={styles.contactLabel}>{item.label}</span>
                  <span className={styles.contactValue}>{item.value}</span>
                </div>
                <span className={styles.contactArrow}>-&gt;</span>
              </a>
            ))}

            <div className={styles.availability}>
              <span className="dot-green" />
              <span>
                Available for <strong>full-time</strong> and <strong>select contract</strong> roles.
              </span>
            </div>
          </div>

          <div className={`card ${styles.formCard}`}>
            {status === 'sent' ? (
              <div className={styles.successMsg}>
                <span className={styles.successIcon}>OK</span>
                <h3>Message Sent</h3>
                <p>Thanks for reaching out. I will reply as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name" className={styles.label}>
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-email" className={styles.label}>
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or role."
                    value={form.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                  />
                </div>
                <button
                  type="submit"
                  id="contact-submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className={styles.spinner} /> Sending...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
