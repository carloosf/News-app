import styles from '@/styles/Hero.module.css'

export default function Hero({ post }) {
    return (
        <hero className={styles.hero}>
            <h1 className={styles.title}>Indicação:</h1>
            {post && (
                <div className={styles.infoHero}>
                    <div className={styles.heroImage}>
                        <img src={post.coverImage} alt="" />
                        <h2>{post.title}</h2>
                    </div>
                    <div className={styles.heroContent}>
                        <p>{post.content.substring(0, 300)}...</p>
                        <span>Continuar lendo</span>
                    </div>
                </div>
            )}
        </hero>
    )
}
