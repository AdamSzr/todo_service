// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../db/prisma'
import redisClient from '../../db/prisma'
import { Todo } from '../../model/Todo'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

  prisma.users

  res.status(200).json({ name: 'John Doe' })
}

