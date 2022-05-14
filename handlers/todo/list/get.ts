// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import prisma from "../../../db/prisma"

type GetParams = {
    userUuid: string
}

export default async function getHandler(params: GetParams) {
    const items = await prisma.todo.findMany({ where: { userUuid: params.userUuid } })
    return items
}

