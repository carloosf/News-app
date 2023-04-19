import styles from '@/styles/Header.module.css'
import Link from 'next/link';

export default function Header() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href={`/`}>
                    <p>
                        <img src="/logo.png" alt="OperNews Logo" />
                    </p>
                </Link>
            </div>
            <div className={styles.actions}>
                <Link href={`/login`} className={styles.login}>
                    <p>Login</p>
                </Link>
            </div>
        </nav>
    )
}
