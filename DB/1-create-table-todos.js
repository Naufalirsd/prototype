// 1-create-table-todos.js
require("dotenv").config({ path: ".env.development.local" });
const { sql } = require("@vercel/postgres");

const execute = async () => {
    console.log("execute");

    const deleteTable = await sql`drop table if exists todos_ppqita`;

    const createTable = await sql`create table todos_ppqita (
        id serial primary key,
        todo varchar(255) not null,
        created_at timestamp default current_timestamp,
        status boolean default false
    )`;

    console.log(createTable);
};

execute();
