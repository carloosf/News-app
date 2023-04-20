import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Login.module.css';
import SideContent from '@/components/SideContent/SideContent';

export default function Login() {
    const [activeTab, setActiveTab] = useState('entrar');
    const router = useRouter();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showContent, setShowContent] = useState(false);

    const handleSignupSubmit = async (e) => {
        const response = await fetch('https://localhost:3333/login', {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email, password, name, surname, action: 'signup'})
        })
        const json = await response.json()
        console.log(json);
        router.push('/');
    }

    const handleLoginSubmit = async (event) => {
        const response = await fetch('https://localhost:3333/login', {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email, password, name, surname, action: 'signup'})
        })

    };

    function handleClick(tab) {
        setActiveTab(tab);
        setShowContent(tab === 'cadastrar');
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
                        <button
                            className={styles.submitBtn}
                            type="submit"
                            onChange={handleSignupSubmit}>
                            {activeTab === 'entrar' ? 'Entrar' : 'Cadastrar'}
                        </button>
                    </div>
                </form>
            </div>
            <SideContent />
        </div>
    );
}

