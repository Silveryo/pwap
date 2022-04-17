import express from 'express';
import { createUser } from '../App/Controllers/UserController';

const router = express.Router();

router.get('/', async (req, res) => {
    return res.send('<div>AAA </div><span>BBB</span>');
});

router.post('/', createUser)

export {
    router as webRouter
}
