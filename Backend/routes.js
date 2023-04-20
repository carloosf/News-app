//Importa todos os componentes
require('dotenv').config()

const express = require("express")
const mysql = require("mysql2")
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

//Cria uma variavel com o express
const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

//Conecta com o banco de dados
const connection = mysql.createConnection(process.env.DATABASE_URL)

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar com o banco de dados' + err.stack);
        return
    }
    console.log('Conexão com banco realizada!');
})

//Cadastro de usuario
router.get('/login', (req, res) => {
    res.send('/')
})

router.get('/', (req, res) => {
    res.send('oi')
})

//Login
router.post('/api/login', (req, res) => {

})

//Usuario adicionar link a si msm
module.exports = router
