// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../../db/prisma"

type DeleteParams = {
    id: number
}

export default function deleteHandler(params: DeleteParams) {
   return prisma.todo.delete({ where: { id: params.id } })
}

