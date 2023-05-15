import { db } from "../database/database.connection.js";
import { createCustomerSchema } from "../schemas/customers.schema.js";

export async function validSchemaCustomers(req, res, next) {
    const customer = req.body
    const { id } = req.params

    const { error } = createCustomerSchema.validate(customer)
    if (error) {
        const errors = error.details.map((detail) => detail.message)
        return res.status(400).send({ errors })
    }

    const cpfAlreadyCreated = await db.query('SELECT * FROM customer WHERE cpf=$1', [customer.cpf])
    if (cpfAlreadyCreated.rowCount != 0 &&
        cpfAlreadyCreated.rows[0].id != Number(id)

    ) {
        return res.sendStatus(409)
    }

    res.locals.customer = id ? { ...customer, id } : customer

    next()
}