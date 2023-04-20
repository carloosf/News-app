const mysql = require('mysql2/promise');
import { createConnection } from 'mysql2/promise';

async function testConnection() {
    try {
        const connection = await createConnection(process.env.DATABASE_URL);
        console.log('Conexão com o banco de dados estabelecida!');
        await connection.end();
    } catch (error) {
        console.log('Erro ao conectar ao banco de dados:', error);
    }
}

testConnection();
