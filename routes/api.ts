import express from 'express';
import { getTasks, createTask, updateTaskStatus, deleteTask } from '../App/Controllers/TaskController';


const router = express.Router();

router.get('/api/user/:userId/tasks', getTasks)
router.post('/api/user/:userId/tasks', createTask);
router.put('/api/user/:userId/tasks/:taskId', updateTaskStatus);
router.delete('/api/user/:userId/tasks/:taskId', deleteTask);

export {
    router as apiRouter
}