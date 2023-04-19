import React, { useState } from 'react';
import styles from '@/styles/Login.module.css'


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className={styles.loginContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Insira seu Email'
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Insira sua Senha'
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <button className={styles.buttonSignup}
                type='submit'
            >
                Cadastrar Agora
            </button>
        </div>
    );
};
