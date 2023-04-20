require('dotenv').config()
import { createConnection } from 'mysql2/promise';

async function connect() {
    const connection = await createConnection(process.env.DATABASE_URL);
    console.log('Conexão com o banco de dados estabelecida!');
    return connection;
}

export default connect;
