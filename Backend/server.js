const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Importa o roteador do Express
const router = require('./src/routes');

app.prepare().then(() => {
    const server = express();

    // Adiciona o roteador do Express
    server.use(router);

    // Adiciona a rota padrão do Next.js
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
