// TODO: add routes for registration & generating api token

import express from 'express';
import { User } from '../App/Entities/User';

const router = express.Router();

router.get('/', async (req, res) => {
    return res.send('<div>AAA </div><span>BBB</span>');
});

router.post('/', async (req, res) => {
    const {
        name,
        email
    } = req.body

    const user: User = User.create({
        name,
        email
    });

    if (!user) {
        return res.send('Failed to create user.');
    }

    if (await User.findOne({ where: { email: email } }) !== null) {
        return res.send('This email is already registered!')
    }

    await user.save();

    return res.json(user);
})

export {
    router as webRouter
}