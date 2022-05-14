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
    return res.status(200).json(await getHandler({ userUuid: "376f79e6-360f-50f8-88a3-c64167e1c3ae" }))

  if (req.method == HTTPMethods.POST)
    return res.status(200).json(await postHandler({ ...req.body }))

  if (req.method == HTTPMethods.DELETE)
    return res.status(200).json(await deleteHandler({ id: Number(req.query.id) }))

  if (req.method == HTTPMethods.PUT)
    return res.status(200).json(await putHandler({ ...req.body } as any))
}

