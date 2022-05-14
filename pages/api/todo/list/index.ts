// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import deleteHandler from '../../../../handlers/todo/list/delete'
import getHandler from '../../../../handlers/todo/list/get'
import postHandler from '../../../../handlers/todo/list/post'
import putHandler from '../../../../handlers/todo/list/put'
import { Todo } from '../../../../model/Todo'
import { HTTPMethods, range } from '../../../../utils/standard'




export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method == HTTPMethods.GET)
    return res.status(200).json(getHandler({ uuid: "" }))

  if (req.method == HTTPMethods.POST)
    return res.status(200).json(postHandler({...req.body}))

  if (req.method == HTTPMethods.DELETE)
    return res.status(200).json(deleteHandler({...req.query} as any))

  if (req.method == HTTPMethods.PUT)
  return res.status(200).json(putHandler({...req.body} as any))
}

