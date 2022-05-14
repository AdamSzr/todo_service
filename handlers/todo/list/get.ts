// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import prisma from "../../../db/prisma"
import { Todo } from "../../../model/Todo"
import { range } from "../../../utils/standard"

type GetParams = {
    userUuid: string
}

export default async function getHandler(params: GetParams) {
    console.log({ params })
    const items = await prisma.todo.findMany({ where: { userUuid: params.userUuid } })
    console.log({ items })
    return items
}

