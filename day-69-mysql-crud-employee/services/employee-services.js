import { pool } from "../config/mysql-config.js";

export async function getEmployees() {
    const [rows] = await pool.query(`select * from employees limit 10`);
    console.log(rows);
    return rows;
}

export async function getMaxNo() {
    const [rows] = await pool.query("select max(emp_no) as max from employees");
    return rows[0];
}

export async function hireEmployee(empNo, birthDate, firstName, lastName, gender, hireDate) {
    // const query = `INSERT INTO employees VALUES(@max_emp_id + 1, '1990-01-01', 'John', 'McKey', 'M', '2011-04-03')`;
    const query = `INSERT INTO employees VALUES(?,?,?,?,?,?)`;
    const [rows] = await pool.query(query, [
        empNo,
        birthDate,
        firstName,
        lastName,
        gender,
        hireDate,
    ]);
    return rows;
}

export async function updateEmployee(empNo, lastName, gender) {
    // const query = ` UPDATE employees SET emp_no = ${empNo}, last_name = ${lastName}, gender = ${gender}  WHERE emp_no = ${empNo}`;
    const query = ` UPDATE employees SET last_name=?, gender=?  WHERE emp_no=?`;
    const [rows] = await pool.query(query, [
        lastName,
        gender,
        empNo
    ]);

    return rows;
}

export async function fireEmployee(empNo) {
    const query = ` delete from employees where emp_no= ${empNo}`;
    const [rows] = await pool.query(query);

    return rows;
}