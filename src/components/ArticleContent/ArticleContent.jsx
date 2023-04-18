import moment from 'moment';
import styles from '@/styles/ArticleContent.module.css';

export default function ArticleContent({ article }) {

    console.log(article.content)

    const text = arti

    return (
        <body className={styles.section}>
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

            <section>

            </section>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <footer>

            </footer>
        </body>
    );
}
