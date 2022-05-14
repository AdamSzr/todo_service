// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../../db/prisma"
import { Todo } from "../../../model/Todo"
import { range } from "../../../utils/standard"

type PutParams = {
    id:number
    text?:string
    deadline?:number
    isDone?:boolean
}

export default function putHandler(params:PutParams) {
    console.log({params})
    const {id, ...update} = params
   return prisma.todo.update({where:{id},data:{...update},})
}

