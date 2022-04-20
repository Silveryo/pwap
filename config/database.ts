import { DataSource } from "typeorm";
import { Client } from "pg";

const client = new Client({
    connectionString:process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
})

export const AppDataSource = new DataSource({
    type: "postgres",
    host: client.host,
    port: client.port,
    username: client.user,
    password: client.password,
    database: client.database,
    entities: ["./App/Entities/*"],
    synchronize: true,
});
