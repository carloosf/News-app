import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Login.module.css';
import { authenticateUser } from '@/api/auth';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = await authenticateUser(email, password);
            localStorage.setItem('token', token);
            // Redireciona para a página inicial após o login bem-sucedido
            router.push('/');
        } catch (err) {
            setError(err.message);
        }
    };

    //front

    

    return (
        <div className={styles.loginContainer}>

            <div className={styles.form}>

                <form className={styles.formData} onSubmit={handleSubmit}>
                    <nav className={styles.options}>
                        <button>Entrar</button>
                        <button>Cadastrar</button>
                    </nav>
                    <div className={styles.inputContainer}>
                        <h2>Bem Vindo de Volta!</h2>
                        <div className={styles.formLogin}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Insira seu Email"
                                required
                            />
                        </div>
                        <div className={styles.formLogin}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Insira sua Senha"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit">Login</button>
                </form>

            </div>


            <div className={styles.formContent}>
                <h1>Olá, Ainda nao tem Cadastro?</h1>
            </div>
        </div>
    );
}
