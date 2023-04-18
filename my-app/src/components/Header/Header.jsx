import styles from '@/styles/Header.module.css'
export default function Header() {
    return (
        <nav className={styles.nav}>
            <p className={styles.logo}>OperNews</p>
            <div className={styles.button}>Lupa</div>
        </nav>
    )
}
