import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import gameRouter from "./routes/games.routes.js"
import customerRouter from "./routes/customers.routes.js"

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())
app.use([gameRouter, customerRouter])


const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))