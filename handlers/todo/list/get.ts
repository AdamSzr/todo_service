// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Todo } from "../../../model/Todo"
import { range } from "../../../utils/standard"

type GetParams = {
    uuid:string
}

export default function getHandler(params:GetParams) {
   return range(0,100).map(i=> Todo.random())
}

