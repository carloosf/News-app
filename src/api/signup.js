import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../lib/db';

export default async function cadastro(req, res) {
    if (req.method === 'POST') {
        const { name, email, password } = req.body;
        try {
            const existingUser = await query(`SELECT * FROM users WHERE email = ?`, [email]);
            if (existingUser.length > 0) {
                console.log(`O email ${email} já esta em uso.`);
                res.status(409).send(`O email ${email} já esta em uso.`);
                return;
            }
            const hash = await bcrypt.hash(password, 10)
            const result = await query(`
                    INSERT INTO users (name, email, password)
                    VALUES (?, ?, ?)`,
                [name, email, hash])
            res.status(201).json({ id: result.insertId })
        } catch (e) {
            console.error(e);
            res.status(500).json({ message: 'Erro ao cadastrar o usuário.' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido.' });
    }
}
