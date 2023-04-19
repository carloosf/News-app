import React, { useState } from 'react';
import styles from '@/styles/Comments.module.css';
import LikeDislike from '@/components/LikeDislike/LikeDislike'
import { BiUserCircle } from 'react-icons/bi'

export default function Comments() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateNow = `${day}/${month}/${year}`;

    const [text, setText] = useState('');
    const [comment, setComment] = useState([
        { User: 'Carlos Silva', Comment: 'Briguem putas, briguem!!!', Date: '06/12/2002', Like: 0, Dislikes: 0 },
        { User: 'Jair Inacio', Comment: 'Olá Companheiro', Date: '31/11/2022', Like: 0, Dislikes: 0 },
        { User: 'Bolsonaro Lula', Comment: 'Imbroxavel', Date: '01/01/2023', Like: 0, Dislikes: 0 },
    ]);

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

    function handleSubmit(event) {
        event.preventDefault();
        const newComment = { User: 'Novo Usuário', Comment: text, Date: dateNow, Like: 0, Dislikes: 0 };
        setComment([...comment, newComment]);
        setText('');
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
                    onClick={handleSubmit}> Cancelar
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
