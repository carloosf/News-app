import React from 'react';
import styles from '@/styles/ArticleContent.module.css';

export default function ArticleContent({ article }) {
    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <h1 className={styles.title}>{article.title}</h1>
                <p>{article.author}</p>
                <p>{article.published}</p>
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
