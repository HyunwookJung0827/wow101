// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { posts } from "@/data/posts";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  res.status(200).json(posts);
}
