import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <p className="section-label">404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.lead}>
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link href="/" className={`btn btn-primary ${styles.home}`}>
          Back home
        </Link>
      </div>
    </div>
  );
}
