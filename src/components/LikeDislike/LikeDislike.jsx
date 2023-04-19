import React, { useState } from 'react';
import c from 'classnames';
import styles from '@/styles/LikeDislike.module.css';

export default function LikeDislike({ likes, dislikes }) {
    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);
    const [numLikes, setNumLikes] = useState(likes);
    const [numDislikes, setNumDislikes] = useState(dislikes);

    function handleLike() {
        if (dislikeActive) {
            setDislikeActive(false);
            setLikeActive(true);
            setNumDislikes(numDislikes - 1);
        } else {
            setLikeActive(!likeActive);
            setNumLikes(likeActive ? numLikes - 1 : numLikes + 1);
        }
    }

    function handleDislike() {
        if (likeActive) {
            setLikeActive(false);
            setDislikeActive(true);
            setNumLikes(numLikes - 1);
        } else {
            setDislikeActive(!dislikeActive);
            setNumDislikes(dislikeActive ? numDislikes - 1 : numDislikes + 1);
        }
    }

    return (
        <div className={styles.container}>
            <button
                className={c(styles.button, { [styles.active]: likeActive })}
                onClick={handleLike}
                disabled={dislikeActive}
            >
                👍 {numLikes}
            </button>
            <button
                className={c(styles.button, { [styles.active]: dislikeActive })}
                onClick={handleDislike}
                disabled={likeActive}
            >
                👎 {numDislikes}
            </button>
        </div>
    );
}
