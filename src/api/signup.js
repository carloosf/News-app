import { query } from '@/handler/db';
import axios from 'axios';

export default async function cadastro(req, res) {
    if (req.method === 'POST') {
        const { name, surname, email, password } = req.body;
        try {
            const existingUser = await query(`SELECT * FROM users WHERE email = ?`, [email]);
            if (existingUser.length > 0) {
                console.log(`O email ${email} já esta em uso.`);
                res.status(409).send(`O email ${email} já esta em uso.`);
                return;
            }
            const result = await query(`
                    INSERT INTO users (name, surname, email, password)
                    VALUES (?, ?, ?, ?)`,
                [name, surname, email, password])
            res.status(201).json({ id: result.insertId })
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: 'Erro ao cadastrar o usuário.' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido.' });
    }
}

export async function registerUser(name, surname, email, password) {
    const response = await axios.post('/api/cadastro', {
        name,
        surname,
        email,
        password,
    });
    return response.data;
}

