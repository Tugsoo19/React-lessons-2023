import { pool } from "../config/mysql-config.js";

export async function getUsers() {
    const [rows] = await pool.query(`select user_id as id, first_name, last_name, phone_number, email, user_role_id from users limit 15`);
    console.log(rows);
    return rows;
}

export async function addUsers(firstName, lastName, email, phoneNumber, userRole) {
    const query = `INSERT INTO users(first_name, last_name, phone_number, email, user_role_id) VALUES(?,?,?,?,?)`;
    const [rows] = await pool.query(query, [
        firstName, lastName, email, phoneNumber, userRole
    ])

    return rows;
}