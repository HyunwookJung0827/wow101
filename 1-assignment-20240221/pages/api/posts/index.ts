// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  res.status(200).json(posts);
}
