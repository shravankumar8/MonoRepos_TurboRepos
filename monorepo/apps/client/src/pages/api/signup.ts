// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
const SECRET = "provenworks";
import { Admin } from "db/index.ts";
import { ensuredbconnected } from "@/lib/dbconnect";
type Data = {
  token?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await ensuredbconnected();
  const email = req.body.email;
  const password = req.body.password;
  const user = await Admin.findOne({ email });
  if (user) {
    return res.status(403).json({ message: "user already exist" });
  }
  {
    const obj = { email: email, password: password };
    const newAdmin = new Admin(obj);
    newAdmin.save();
    const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
    return res.status(200).json({ token: token });
  }
}
