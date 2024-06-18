import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory()

server.get('/bets', () => {
    return database.list()
})

server.post('/bets', (req, res) => {
    const { nome, email, idade, time } = req.body

    database.create({
        nome,
        email,
        idade,
        time,
    })

    return res.status(201).send()
})

server.put('/bets/:id', (req, res) => {
   const id = req.params.id
   const { nome, email, idade, time } = req.body

   database.update(id, {
       nome,
       email,
       idade,
       time,
   })

   res.status(204).send()
})

server.delete('/bets/:id', (req, res) => {
    const id = req.params.id
    database.delete(id)
    return res.status(200).send()
})

server.listen({
    port: 3333
})