import { User } from "../Entities/User";
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const createUser = async (req: Request, res: Response) => {
    const {
        name,
        email
    } = req.body

    console.log('Form request:', req.body)

    const user: User = User.create({
        name,
        email,
        password: uuidv4()
    });

    if (!user) {
        return res.send('Failed to create user.');
    }

    if (await User.findOne({ where: { email: email } }) !== null) {
        return res.send('This email is already registered!');
    }

    await user.save();

    return res.send('Your API password: <strong>' + user.password + '</strong><br><br> Don\'t forget it!');
}
