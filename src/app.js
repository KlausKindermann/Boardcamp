import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

import gameRouter from './routes/games.routes.js'
import customerRouter from './routes/customers.routes.js'
import rentalsRouter from './routes/rentals.routes.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use([gameRouter, customerRouter, rentalsRouter])

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})