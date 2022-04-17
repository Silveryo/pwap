import { User } from "../Entities/User";
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const createUser = async (req: Request, res: Response) => {
    const {
        name,
        email
    } = req.body

    const user: User = User.create({
        name,
        email,
        password: uuidv4()
    });

    if (!user) {
        return res.send('Failed to create user.');
    }

    if (await User.findOne({ where: { email: email } }) !== null) {
        return res.send('This email is already registered!')
    }

    await user.save();

    return res.json(user);
}
