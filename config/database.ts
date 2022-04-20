import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: 'ec2-23-20-224-166.compute-1.amazonaws.com',
    port: 5432,
    username: 'rjtxrtnkinmdma',
    password: '1c84e318c377cc01808708bf98a3c55a63132761dd207e2e7d54ef02b5bc71ca',
    database: 'def2kubdq0f9ov',
    entities: ["./App/Entities/*"],
    synchronize: true,
});
