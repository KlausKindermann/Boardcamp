import { Router } from "express";
import { create } from "../controllers/games.controllers.js";
import { validSchemaGames } from "../middlewares/games.middleware.js";
import { listAll } from "../controllers/games.controllers.js";

const gameRouter = Router()

gameRouter.get('/games', listAll)
gameRouter.post('/games', validSchemaGames, create)

export default gameRouter