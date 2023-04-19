import React from 'react';
import styles from '@/styles/Comments.module.css';

export default function Comments() {
    return (
        <section className={styles.commentSection}>
            <h1>Comentarios:</h1>
            <textarea name="" id="" cols="30" rows="10" className={styles.commentArea}></textarea>
            <button type="submit"></button>
        </section>
    );
}
