// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../../db/prisma"

type PostParams = {
    userUuid: string
    text?: string
    title: string
    deathline?: number
}

export default function postHandler(params: PostParams) {
    return prisma.todo.create({ data: params as any, select: {} })
}

