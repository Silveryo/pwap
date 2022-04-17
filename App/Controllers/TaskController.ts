import { User } from '../Entities/User';
import { Task } from '../Entities/Task';
import { Request, Response } from 'express';

export const getTasks = async (req: Request, res: Response) => {
    const { userId } = req.params;

    const user = await User.findOne({
        join: {
            alias: "user",
            leftJoinAndSelect: {
                task: "user.tasks",
            }
        },
        where: {
            id: parseInt(userId)
        }
    });

    if (!user) {
        return res.send({
            msg: "User not found.",
        })
    }

    return res.json(user.tasks);
}

export const createTask = async (req: Request, res: Response) => {
    const { userId } = req.params;

    const user = await User.findOne({ where: { id: parseInt(userId) } });

    if (!user) {
        return res.send({
            msg: "User not found.",
        })
    }

    const {
        name,
        description,
    } = req.body;

    const task: Task = Task.create({
        name,
        description,
        user,
    });

    await task.save();

    return res.json(task);
}

export const updateTaskStatus = async (req: Request, res: Response) => {
    const { userId, taskId } = req.params;

    const task = await Task.findOne({ where: { id: parseInt(taskId) } });

    if (!task) {
        return res.send(`Task (id = ${taskId}) doesn't exist.`)
    }

    task.is_completed = !task.is_completed;
    await task.save();

    return res.json(task);
}

export const deleteTask = async (req: Request, res: Response) => {
    const { userId, taskId } = req.params;

    const task = await Task.findOne({ where: { id: parseInt(taskId) } });

    if (!task) {
        return res.send(`Task (id = ${taskId}) doesn't exist.`)
    }

    await task.remove();
    return res.send(`Removed task (id = ${taskId}).`)
}