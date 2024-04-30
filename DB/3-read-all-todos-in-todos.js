// 3-reads-all-todos-in-todos.js
require("dotenv").config({ path: ".env.development.local" });
const { sql } = require("@vercel/postgres");

const readAllTodos = async () => {
    console.log("Eksekusi: Membaca semua data todos dari tabel todos_ppqita");

    try {
        const result = await sql`SELECT * FROM todos_ppqita`;
        console.log("Data todos:", result.rows);
    } catch (error) {
        console.error("Gagal membaca data todos:", error);
    }
};

readAllTodos();
