import { Router } from "express";
import { create, listAll, getById, update } from "../controllers/customers.controllers.js";
import { validSchemaCustomers } from "../middlewares/customers.middlewares.js";

const customerRouter = Router()

customerRouter.get('/customers', listAll)
customerRouter.get('/customers/:id', getById)
customerRouter.post('/customers', validSchemaCustomers, create)
customerRouter.put('/customers/:id', validSchemaCustomers, update)


export default customerRouter