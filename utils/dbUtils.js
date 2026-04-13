import mysql from 'mysql2/promise';

export default class DBUtils {
    constructor() {
        this.connection = null;
    }

    async connect() {
        this.connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'flightdb'
        });
    }

    async query(sql) {
        const [rows] = await this.connection.execute(sql);
        return rows;
    }

    async close() {
        await this.connection.end();
    }
}