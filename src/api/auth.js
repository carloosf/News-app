import crypto from 'crypto';
import jwt from "jsonwebtoken";
import mysql from "mysql2";
import dotenv from 'dotenv';

dotenv.config();

export async function authenticateUser(email, password) {
    const connection = mysql.createConnection(process.env.DATABASE_URL);

    connection.connect((err) => {
        if (err) {
            console.error("Erro ao conectar com o banco de dados" + err.stack);
            return;
        }
        console.log("Conexão com banco realizada!");
    });

    const [rows] = await connection.promise().query(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );

    if (rows.length === 0) {
        throw new Error("Email ou senha inválidos");
    }

    const salt = rows[0].salt;
    const iterations = 10000;
    const keylen = 64;
    const digest = 'sha512';

    const derivedKey = await new Promise((resolve, reject) => {
        crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, derivedKey) => {
            if (err) reject(err);
            resolve(derivedKey);
        });
    });

    const hash = derivedKey.toString('hex');

    if (hash !== rows[0].password) {
        throw new Error("Email ou senha inválidos");
    }

    const token = jwt.sign({ id: rows[0].id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
    });

    return token;
}
