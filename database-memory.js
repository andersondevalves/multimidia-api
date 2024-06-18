import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #bets = new Map()

    list() {
        return Array.from(this.#bets.entries())
            .map((alunoArray) => {
                const id = alunoArray[0]
                const data = alunoArray[1]

                return {
                    id,
                    ...data
                }
            })
    }

    create(aluno) {
        const alunoId = randomUUID()

        this.#bets.set(alunoId, aluno)
    }

    update(id, aluno) {
        this.#bets.set(id, aluno)
    }

    delete(id) {
        this.#bets.delete(id)
    }
}