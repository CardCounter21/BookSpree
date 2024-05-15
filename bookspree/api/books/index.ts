import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const books = await prisma.book.findMany();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching books' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
