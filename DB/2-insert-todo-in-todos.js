// 2-insert-todo-in-todos.js
require("dotenv").config({ path: ".env.development.local" });
const { sql } = require("@vercel/postgres");

const insertTodo = async () => {
    console.log("Eksekusi: Menyisipkan data todo ke dalam tabel todos_ppqita");

    try {
        const insertQuery = await sql`
            INSERT INTO todos_ppqita (todo, created_at) VALUES ('Belajar CRUD', NOW());
        `;
        console.log("Data todo berhasil disisipkan ke dalam tabel.");
    } catch (error) {
        console.error("Gagal menyisipkan data todo:", error);
    }
};

insertTodo();
