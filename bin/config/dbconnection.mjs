import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.getConnection((err) => {
    if (err) {
        console.error('error in connection', err);
    } else {
        console.log('database is connected now');
    }
});

export default db;