import express, { json } from "express"
import routes from "./src/routes.js"
const app = express()

app.use(json())
app.use(routes)

app.get("/health", (req, res) => {
    return res.json("up")
})

const port = 3333
app.listen(port, () => console.log(`Servidor conectado na rota: ${port}`))
