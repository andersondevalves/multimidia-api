import { randomUUID } from 'node:crypto'
import { db } from './sql.js'

export class DatabaseSql {
    async list() {
        const bets = await db.query`select * from bets`
        return bets.recordset
    }

    async create(bets) {
        const alunoId = randomUUID()

        const { nome, email, idade, time} = aluno

        await db.query`insert into bets values (
            ${alunoId}, ${nome}, ${email}, ${idade}, ${time}
        )`
    }

    async update(id, bets) {
        const { nome, email, idade, time} = bets

        console.log(`update bets
        set name = '${nome}', text = ${email}, age = ${idade}, team = '${time}'
        where id = '${id}'`)

        await db.query`update bets
            set name = '${nome}', text = ${email}, age = ${Number(idade)}, team = '${time}'
            where id = '${id}'`
    }

    async delete(id) {
        await db.query`delete from bets where id = ${id}`
    }
}