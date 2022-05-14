import { PrismaClient } from '@prisma/client'
import { Todo } from '../model/Todo'
import { range } from '../utils/standard'
const prisma = new PrismaClient()

async function main() {
  range(0,100).forEach(async a=> {
    const alice = await prisma.todo.create({data:{...Todo.random()}} as any)
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
