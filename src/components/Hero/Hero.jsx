import styles from '@/styles/Hero.module.css'
import Link from 'next/link';


export default function Hero({ post }) {
    return (
        <Link href={`/article/${post.id}`} className={styles.hero}>
            {post && (
                <div className={styles.infoHero}>
                    <div className={styles.heroImage}>
                        <img src={post.coverImage} alt="" />
                        <h2>{post.title}</h2>
                    </div>
                </div>
            )}
        </Link>
    )
}
