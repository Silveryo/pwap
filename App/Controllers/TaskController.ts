import { User } from '../Entities/User';
import { Task } from '../Entities/Task';
import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database';

export const getTasks = async (req: Request, res: Response) => {
    const { userId, password } = req.params;
    const user = await User.findOne({
        join: {
            alias: "user",
            leftJoinAndSelect: {
                task: "user.tasks",
            }
        },
        where: {
            id: parseInt(userId),
        }
    });

    if (!user) {
        return res.send({
            msg: "User not found.",
        })
    }

    if (password != user.password) {
        return res.send({
            msg: "Failed to authenticate.",
        })
    }

    return res.json(user.tasks);
}

export const getCompletedTasks = async (req: Request, res: Response) => {
    const { userId, password } = req.params;

    const data = await AppDataSource.manager
        .createQueryBuilder(User, "user")
        .leftJoinAndSelect("user.tasks", 'task')
        .where("user.id = :id", {id: userId})
        .andWhere("task.is_completed = :is_completed", {is_completed: true})
        .getOne();

    if (!data) {
        return res.send({
            msg: "Data not found.",
        })
    }

    if (password != data.password) {
        return res.send({
            msg: "Failed to authenticate.",
        })
    }

    return res.json(data.tasks);
}

export const getIncompleteTasks = async (req: Request, res: Response) => {
    const { userId, password } = req.params;

    const data = await AppDataSource.manager
        .createQueryBuilder(User, "user")
        .leftJoinAndSelect("user.tasks", 'task')
        .where("user.id = :id", {id: userId})
        .andWhere("task.is_completed = :is_completed", {is_completed: false})
        .getOne();

    if (!data) {
        return res.send({
            msg: "Data not found.",
        })
    }

    if (password != data.password) {
        return res.send({
            msg: "Failed to authenticate.",
        })
    }

    return res.json(data.tasks);
}

export const createTask = async (req: Request, res: Response) => {
    const { userId, password } = req.params;
    const user = await User.findOne({ where: { id: parseInt(userId) } });

    if (!user) {
        return res.send({
            msg: "User not found.",
        })
    }

    if (password != user.password) {
        return res.send({
            msg: "Failed to authenticate.",
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

    return res.status(201).json(task);
}

export const updateTaskStatus = async (req: Request, res: Response) => {
    const { userId, taskId, password } = req.params;
    const task = await Task.findOne({ where: { id: parseInt(taskId) } });
    const user = await User.findOne({ where: { id: parseInt(userId) } });

    if (!task) {
        return res.send(`Task (id = ${taskId}) doesn't exist.`)
    }


    if (!user) {
        return res.send({
            msg: "User not found.",
        })
    }

    if (password != user.password) {
        return res.send({
            msg: "Failed to authenticate.",
        })
    }

    task.is_completed = !task.is_completed;
    await task.save();

    return res.json(task);
}

export const deleteTask = async (req: Request, res: Response) => {
    const { userId, taskId, password } = req.params;
    const task = await Task.findOne({ where: { id: parseInt(taskId) } });
    const user = await User.findOne({ where: { id: parseInt(userId) } });

    if (!user) {
        return res.send({
            msg: "User not found.",
        })
    }

    if (password != user.password) {
        return res.send({
            msg: "Failed to authenticate.",
        })
    }

    if (!task) {
        return res.send(`Task (id = ${taskId}) doesn't exist.`)
    }

    await task.remove();
    return res.send(`Removed task (id = ${taskId}).`)
}
