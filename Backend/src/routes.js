import dotenv from 'dotenv';
dotenv.config();

//Importa todos os componentes
import { Router } from "express"
import mysql2 from "mysql2"
import bcrypt from 'bcrypt'
import bodyParser from 'body-parser'
import cors from 'cors'

//Cria uma variavel com o express
const routes = Router()

const { hash, compare } = bcrypt
const { createConnection } = mysql2
const { json, urlencoded } = bodyParser

routes.use(cors())
routes.use(bodyParser.json());

routes.use(urlencoded({ extended: true }));

//Conecta com o banco de dados
const connection = createConnection(process.env.DATABASE_URL)

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar com o banco de dados' + err.stack);
        return
    }
    console.log('Conexão com banco realizada!');
})

routes.post('/login', (req, res) => {
    const { email, password, name, surname, loginVerify } = req.body
    if (!loginVerify) {
        //Verificação de duplicidade
        connection.query('SELECT * FROM user WHERE email = ?', [email], (err, rows) => {
            if (err) throw err
            if (rows.length > 0) {
                console.log(`O email ${email} já esta em uso.`)
                res.status(409).send(`ò email ${email} já esta em uso.`)
                return
            }
            hash(password, 10, (err, hash) => {
                if (err) throw err
                connection.query('INSERT INTO user (email, password, name, surname) VALUES (?, ?, ?, ?)', [email, hash, name, surname], (err, result) => {
                    if (err) throw err
                    res.send(`Registro Criado com sucesso! ID: ${result.insertId}`)
                })
            })
        })
    } else if (loginVerify) {
        connection.query('SELECT * FROM user WHERE email = ?', [email], (err, rows) => {
            if (err) throw err
            if (rows.length === 0) {
                console.log("as Credenciais fornecidas nao sao validas")
                return res.status(401).send(`o email ou senha nao esta valido`)
            }
            bcrypt.compare(password, rows[0].password, (err, result) => {
                if (err) throw err
                if (result === false) {
                    console.log("as Credenciais fornecidas nao sao validas")
                    return res.status(401).send(`o email ou senha nao esta valido`)
                }
                console.log("Login realizado")
                return res.status(200).send('Login realizado com sucesso')
            })
        })
    }
})

routes.post('/article', (req, res) => {
    const {
        id,
        Email,
        Comment,
        Date,
        Like,
        Dislikes,
        respostas
    } = req.body

    connection.query("INSERT INTO comment (Url, Email, Content, DateComment, Likes, Dislikes, respostas) VALUES (? , ?, ?, ?, ?, ?, ?)",
        [id, Email, Comment, Date, Like, Dislikes, respostas], (err, result) => {
            if (err) throw err
            res.send(`Registro Criado com sucesso! ID: ${result}`)
        })
})

routes.get('/article/:id', (req, res) => {
    const idurl = req.params.id
    res.send(idurl);
    connection.query('SELECT * FROM comment where Url = ?', [idurl], (err, rows) => {
        if (err) throw err
        res.send(rows)
    })
})


export default routes
