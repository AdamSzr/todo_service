// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../../db/prisma"

type PutParams = {
    id: number
    text?: string
    deadline?: number
    isDone?: boolean
}

export default function putHandler(params: PutParams) {
    const { id, ...update } = params
    return prisma.todo.update({ where: { id }, data: { ...update }, })
}

