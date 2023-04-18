import styles from '@/styles/Home.module.css'
import Link from 'next/link';

export default function NewsList({ posts }) {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Ultimas Noticias</h1>
            <ul className={styles.listNews}>
                {posts.map(post => (
                    <Link href={`/article/${post.id}`} key={post.id}>
                        <li className={styles.cardNews}>
                            <img src={post.coverImage} alt="" />
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                            <p>Escrito por: {post.author}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </main>
    )
}
