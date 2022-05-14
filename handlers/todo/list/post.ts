// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Todo } from "../../../model/Todo"
import { range } from "../../../utils/standard"

type PostParams = {
    uuid:string
    text:string
    deadline?:number
}

export default function postHandler(params:PostParams) {
   return params
}

