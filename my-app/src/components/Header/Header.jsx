import styles from '@/styles/Header.module.css'
import Link from 'next/link';

export default function Header() {
    return (
        <nav className={styles.nav}>
            <Link href={`/`} className={styles.logo}>OperNews </Link>
            <div className={styles.button}>Lupa</div>
        </nav>
    )
}
