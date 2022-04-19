import express from "express";
import { apiRouter } from './routes/api';
import { webRouter } from './routes/web';

const app = express();

app.use(express.json())
    .use(apiRouter)
    .use(webRouter);

export default app;
