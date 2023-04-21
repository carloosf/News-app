import React, { useEffect, useState } from 'react';
import styles from '@/styles/Comments.module.css';
import LikeDislike from '@/components/LikeDislike/LikeDislike'
import axios from 'axios';


export default function Comments({ article }, content,) {

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateNow = `${day}/${month}/${year}`;

    const [text, setText] = useState('');
    const [comment, setComment] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: article.id,
            Email: 'email@usuario.com',
            Comment: text,
            Date: dateNow,
            Like: 0,
            Dislikes: 0,
            respostas: []
        };
        console.log(data);

        axios.post('http://localhost:3333/article', data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    function handleChange(event) {
        const inputText = event.target.value;
        setText(inputText);
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';

        if (inputText.length > 0) {
            document.querySelector('#submitButton').removeAttribute('disabled');
        } else {
            document.querySelector('#submitButton').setAttribute('disabled', true);
        }
    }

    return (
        <section className={styles.commentSection}>
            <h1>{`${comment.length}`} Comentários:</h1>
            <textarea
                name=""
                id=""
                cols="100"
                rows="1"
                className={styles.commentArea}
                value={text}
                onChange={handleChange}
                placeholder='Adicione um comentario!'
            ></textarea>

            <div className={styles.commentButton}>
                <button //voltar para fazer sistema de desabilitar o botao quando text area estiver vazio
                    id='submitButton'
                    type="submit"
                    onClick={handleSubmit}> Enviar
                </button>
                <button
                    type="submit"
                >Cancelar
                </button>
            </div>

            <ul className={styles.usersComments}>
                {comment.map((comment, index) => (
                    <li key={index} className={styles.commentItem}>
                        <h3 className={styles.commentHeader}>
                            <div>
                                <p>{comment.User}</p> <p className={styles.commentDate}>{comment.Date}</p>
                            </div>
                        </h3>
                        <p>
                            - {comment.Comment}
                        </p>
                        <div className={styles.commentNav}>
                            <LikeDislike likes={comment.Like} dislikes={comment.Dislikes} />
                            <button
                                type='submmit'>
                                Responder
                            </button>
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
        </section>
    );
}

/*
export async function getStaticProps() {
    const response = await axios.get('https://news-api.lublot.dev/api/posts[id]');
    const post = response.data;

    const posts = post.slice(0, 20);
    const heroPost = posts[Math.floor(Math.random() * posts.length)];
    const tags = post.map((tag) => {

        return tag.tags;
    });

    return {
        props: {
            posts,
            heroPost,
            tags,
        },
        revalidate: 60 * 60 * 1,
    };
}
*/
