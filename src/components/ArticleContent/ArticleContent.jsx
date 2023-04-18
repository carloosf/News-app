import moment from 'moment';
import styles from '@/styles/ArticleContent.module.css';
import { useState } from 'react';

export default function ArticleContent({ article, content }) {

    const contentOrganized = Array.isArray(content) ? content.reduce((acc, curr, index) => {
        if (index % 2 === 0) {
            acc.push(curr + content[index + 1]);
        }
        return acc;
    }, []) : [];



    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <h1>{article.title}</h1>
                <span>{article.author}</span>
                <span>|</span>
                <span>{moment(article.published).format('DD/MM/YYYY')}</span>
                <img src={article.coverImage} alt="" />
            </header>

            <ul className={styles.article}>
                {contentOrganized.map(contentOrganized => (
                        <li>
                            <p>{`${contentOrganized}`}</p><br />
                        </li>
                ))}
            </ul>


            <section>
            </section>

            <textarea name="" id="" cols="30" rows="10"></textarea>

            <footer>
            </footer>
        </section>
    );
}
