import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { title, author, quantity, cover } = req.body;
      const newBook = await prisma.book.create({
        data: {
          title,
          author,
          quantity: Number(quantity),
          coverImageUrl: cover,
        },
      });
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ error: 'Error adding book' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      await prisma.book.delete({
        where: { id: String(id) },
      });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting book' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
