import moment from 'moment';
import styles from '@/styles/ArticleContent.module.css';

export default function ArticleContent({ article }) {
    
    console.log(article.content)

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <h1>{article.title}</h1>
                <span>{article.author}</span>
                <span>|</span>
                <span>{moment(article.published).format('DD/MM/YYYY')}</span>
                <img src={article.coverImage} alt="" />
            </header>

            <article className={styles.article}>
                <p className={styles.title}>{article.content}</p>
            </article>

            <footer>

            </footer>
        </section>
    );
}
