import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Login.module.css';
import { authenticateUser } from '@/api/auth';
import { registerUser } from '@/api/signup';

export default function LoginForm({ activeTab, onTabClick }) {
    const router = useRouter();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showContent, setShowContent] = useState(false);

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = await authenticateUser(email, password);
            localStorage.setItem('token', token);
            // Redireciona para a página inicial após o login bem-sucedido
            router.push('/');
        } catch (err) {
            console.log(err);
        }
    };

    const handleSignupSubmit = async (event) => {
        event.preventDefault();

        try {
            await registerUser(name, surname, email, password);
            // Redireciona para a página inicial após o cadastro bem-sucedido
            router.push('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form
            className={styles.formData}
            onSubmit={activeTab === 'entrar' ? handleLoginSubmit : handleSignupSubmit}
        >
            <nav className={styles.tabForm}>
                <button
                    className={activeTab === 'entrar' ? styles.active : ''}
                    onClick={() => onTabClick('entrar')}
                >
                    Entrar
                </button>
                <button
                    className={activeTab === 'cadastrar' ? styles.active : ''}
                    onClick={() => onTabClick('cadastrar')}
                >
                    Cadastrar
                </button>
            </nav>
            <div className={styles.inputContainer}>
                {showContent ? (
                    <div className={styles.formSignup}>
                        <h2>Cadastre-se Gratis!</h2>
                        <div className={styles.names}>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Insira seu Nome"
                                required
                            />
                            <input
                                type="text"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                placeholder="Insira seu Sobrenome"
                                required
                            />
                        </div>
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
                ) : (
                    <div>
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
                                type="
