// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { Todo } from '../../../../model/Todo'
import { range } from '../../../../utils/standard'



export default async function handler(req:NextApiRequest, res:NextApiResponse) {

  res.status(200).json(range(0,1000).map(i=> Todo.random()))
}

