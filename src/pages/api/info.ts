// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { InfoProps } from "../info/ssr";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<InfoProps>
) {
  console.log("query /api/info");
  res.status(200).json({
    name: "xl",
    sex: "boby",
    age: 18,
  });
}
