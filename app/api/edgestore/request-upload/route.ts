// file: /app/api/edgestore/request-upload/route.ts

import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { useEdgeStore } from '@/app/lib/edgestore';

const handler = nextConnect();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { edgestore } = useEdgeStore();

  // Logic untuk mengunggah file menggunakan edgestore
  // Misalnya, ambil file dari req dan kirim ke edgestore
  const file = req.body.file;
  const result = await edgestore.uploadFile(file);

  res.status(200).json({ message: 'File uploaded successfully!', data: result });
});

export default handler;
