import express from 'express';
import path from 'path';
import { createUser } from '../App/Controllers/UserController';
import parseUrl from 'body-parser';

const router = express.Router();
const encodeUrl = parseUrl.urlencoded({ extended: false })

router.get('/', async (req, res) => {
    return res.sendFile(path.resolve(__dirname + '/../pages/register.html'));
});

router.post('/', encodeUrl, createUser)

export {
    router as webRouter
}
