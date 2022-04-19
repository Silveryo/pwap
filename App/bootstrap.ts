import { AppDataSource } from '../config/database';

const bootstrap = () => {
    initDatabase();
}

async function initDatabase() {
    await AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        });
}

export default bootstrap;
