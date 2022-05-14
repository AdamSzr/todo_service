// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { delBasePath } from "next/dist/shared/lib/router/router"
import prisma from "../../../db/prisma"
import { Todo } from "../../../model/Todo"
import { range } from "../../../utils/standard"

type PostParams = {
    userUuid: string
    text?: string
    title: string
    deathline?: number
}

export default function postHandler(params: PostParams) {
    return prisma.todo.create({ data: params as any ,select:{}})
}

