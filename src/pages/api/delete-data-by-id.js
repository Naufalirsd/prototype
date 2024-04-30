import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
    // Cek method
    if (req.method !== "DELETE") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    // Ambil ID dari query params
    const { id } = req.query;

    try {
        // Hapus data berdasarkan ID
        const result = await sql`
      DELETE FROM todos_ppqita
      WHERE id = ${id}
      RETURNING *`;

        // Beritahu jika data berhasil dihapus
        return res
            .status(200)
            .json({ message: "Data berhasil dihapus", data: result.rows[0] });
    } catch (error) {
        // Tangani error jika terjadi
        return res.status(500).json({ error: error.message });
    }
}
