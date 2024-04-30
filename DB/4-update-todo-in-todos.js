// 4-update-todo-in-todos.js
require("dotenv").config({ path: ".env.development.local" });
const { sql } = require("@vercel/postgres");

const updateTodo = async () => {
    console.log("Eksekusi: Memperbarui data todo di dalam tabel todos_ppqita");

    try {
        const updateQuery = await sql`
            UPDATE todos_ppqita SET todo = 'Belajar CRUD yang lebih dalam' WHERE id = 1;
        `;
        console.log("Data todo berhasil diperbarui.");
    } catch (error) {
        console.error("Gagal memperbarui data todo:", error);
    }
};

updateTodo();
