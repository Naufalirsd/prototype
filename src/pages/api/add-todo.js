import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
    // cek method
    if (req.method !== "POST") {
        return res.status(405).json({ error: "method not allowed" });
    }

    // cek data
    let { todo } = await req.body;

    if (!todo) {
        return res.status(400).json({ error: "todo harus ada" });
    }

    // simpan data
    const resData = await sql`INSERT INTO todos_ppqita (todo, created_at )
  VALUES (${todo}, ${new Date()})`;

    // beritahu klo success
    return res.status(200).json({ message: "saved", data: resData });
}
