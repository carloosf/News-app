import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import moment from 'moment';

export default function NewsList({ posts }) {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Ultimas Noticias</h1>
            <ul className={styles.listNews}>
                {posts.map(post => (
                    <Link href={`/article/${post.id}`} key={post.id} className={styles.link}>
                        <li className={styles.cardNews}>
                            <img src={post.coverImage} alt="" />
                            <div className={styles.contentCard}>

                                <h3>{post.title}</h3>
                            </div>
                            <article>
                                {[post.content.slice(0, 80)]}...
                            </article>
                            <footer className={styles.footerCard}>
                                <p>{post.author}</p>
                                <p>{moment(post.published).format('DD/MM/YYYY')}</p>
                            </footer>
                        </li>
                    </Link>
                ))}
            </ul>
        </main>
    )
}
