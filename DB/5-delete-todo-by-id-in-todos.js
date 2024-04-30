// 5-delete-todo-by-id-in-todos.js
require("dotenv").config({ path: ".env.development.local" });
const { sql } = require("@vercel/postgres");

const deleteTodoById = async () => {
    console.log(
        "Eksekusi: Menghapus data todo berdasarkan ID dari tabel todos_ppqita"
    );

    const todoId = 1; // Ganti dengan ID todo yang ingin dihapus

    try {
        const deleteQuery =
            await sql`DELETE FROM todos_ppqita WHERE id = ${todoId}`;
        console.log(`Data todo dengan ID ${todoId} berhasil dihapus.`);
    } catch (error) {
        console.error("Gagal menghapus data todo:", error);
    }
};

deleteTodoById();
