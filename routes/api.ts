import express from 'express';
import { getTasks, createTask, updateTaskStatus, deleteTask } from '../App/Controllers/TaskController';


const router = express.Router();

router.get('/api/user/:userId/tasks/:password', getTasks)
router.post('/api/user/:userId/tasks/:password', createTask);
router.put('/api/user/:userId/tasks/:taskId/:password', updateTaskStatus);
router.delete('/api/user/:userId/tasks/:taskId/:password', deleteTask);

export {
    router as apiRouter
}
