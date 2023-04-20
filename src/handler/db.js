import mysql from 'mysql2';
import { promisify } from 'util';

const pool = mysql.createPool({
    URL: process.env.DATABASE_URL,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const query = promisify(pool.query).bind(pool);
