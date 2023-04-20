import styles from '@/styles/SideContent.module.css';
import Link from 'next/link';

export default function SideContent() {
    return (
        <aside className={styles.formContent}>
            <div className={styles.sideContent}>
                <div className={styles.headerContent}>
                    <h2>OperNews
                        <hr />
                    </h2>
                    <p>Seu Canal de noticia diario</p>
                </div>
                <Link className={styles.homeButton} href='/'>Home</Link>
            </div>
        </aside>
    )
}
