import styles from '@/styles/Hero.module.css'

export default function Hero({ post }) {
    return (
        <hero className={styles.hero}>
            {post && (
                <div className={styles.infoHero}>
                    <div className={styles.heroImage}>
                        <img src={post.coverImage} alt="" />
                        <h2>{post.title}</h2>
                    </div>
                </div>
            )}
        </hero>
    )
}
