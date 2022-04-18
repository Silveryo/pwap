import { AppDataSource } from './config/database';
import express from "express";
import { apiRouter } from './routes/api';
import { webRouter } from './routes/web';


const bootstrap = async () => {

    const PORT = 2222;
    const app = express();

    await AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        });

    app.use(express.json())
        .use(apiRouter)
        .use(webRouter);

    app.listen(PORT, () => {
        console.log(`App running on localhost:${PORT}`);
    });
}

bootstrap();
