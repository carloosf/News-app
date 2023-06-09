import moment from 'moment';
import { useState, useEffect } from 'react';
import styles from '@/styles/ArticleContent.module.css';
import Comments from '../Comments/Comments';


export default function ArticleContent({ article, content }) {
    const [articleState, setArticle] = useState({});

    const contentOrganized = (content ?? []).reduce((acc, curr, index) => {
        if (index % 2 === 0) {
            acc.push(curr + content[index + 1]);
        }
        return acc;
    }, []);

    useEffect(() => {
        if (article) {
            setArticle(article);
        }
    }, [article]);

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <h1>{articleState.title}</h1>
                <span>{articleState.author}</span>
                <span>|</span>
                <span>{moment(articleState.published).format('DD/MM/YYYY')}</span>
                <img src={articleState.coverImage} alt="" />
            </header>

            <ul className={styles.articleText}>
                {contentOrganized.map((contentOrganized, index) => (
                    <li key={index}>
                        <p>{`${contentOrganized}`}</p><br />
                    </li>
                ))}
                <hr />
            </ul>

            <Comments article={article} content={content} />

            <footer>
            </footer>
        </section>
    );
}
