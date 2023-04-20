import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Login.module.css';
import { authenticateUser } from '@/api/auth';

export default function Login() {
    const [activeTab, setActiveTab] = useState('entrar');
    const router = useRouter();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showContent, setShowContent] = useState(false);

    const handleLoginSubmit = async (event) => {
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

    const handleSignupSubmit = async (event) => {
        event.preventDefault();

        try {
            // Crie a lógica para registrar um novo usuário aqui
            router.push('/');
        } catch (err) {
            setError(err.message);
        }
    };

    function handleClick(tab) {
        setActiveTab(tab);
        if (tab === 'cadastrar') {
            setShowContent(true);
        } else {
            setShowContent(false);
        }
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.form}>
                <form className={styles.formData} onSubmit={activeTab === 'entrar' ? handleLoginSubmit : handleSignupSubmit}>
                    <nav className={styles.tabForm}>
                        <button className={activeTab === 'entrar' ? styles.active : ''} onClick={() => handleClick('entrar')}>
                            Entrar
                        </button>
                        <button
                            className={activeTab === 'cadastrar' ? styles.active : ''}
                            onClick={() => handleClick('cadastrar')}
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
                                        type="password"
                                        value={password
                                        }
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Insira sua Senha"
                                        required
                                    />
                                </div>
                            </div>
                        )}
                        {error && <div className={styles.error}>{error}</div>}
                        <button className={styles.submitBtn} type="submit">
                            {activeTab === 'entrar' ? 'Entrar' : 'Cadastrar'}
                        </button>
                    </div>
                </form>
            </div>
            <div className={styles.formContent}>

            </div>
        </div>
    );
}
