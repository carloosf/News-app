import { useState } from "react";
import { useRouter } from "next/router";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Conecta com o banco de dados
        const connection = mysql.createConnection(process.env.DATABASE_URL);

        connection.connect((err) => {
            if (err) {
                console.error("Erro ao conectar com o banco de dados" + err.stack);
                return;
            }
            console.log("Conexão com banco realizada!");
        });

        connection.query(
            "SELECT * FROM users WHERE email = ?",
            [email],
            async (err, rows) => {
                if (err) throw err;
                if (rows.length === 0) {
                    setError("Email ou senha inválidos");
                    return;
                }
                const match = await bcrypt.compare(password, rows[0].password);
                if (!match) {
                    setError("Email ou senha inválidos");
                    return;
                }
                const token = jwt.sign(
                    { id: rows[0].id },
                    process.env.SECRET_KEY,
                    { expiresIn: "1h" }
                );
                localStorage.setItem("token", token);
                router.push("/");
            }
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Senha:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Entrar</button>
        </form>
    );
};

export default Login;
