// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Todo } from "../../../model/Todo"
import { range } from "../../../utils/standard"

type DeleteParams = {
    id:string
}

export default function deleteHandler(params:DeleteParams) {
   return {id:params.id}
}

