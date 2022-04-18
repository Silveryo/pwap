import express from 'express';
import { getTasks, getCompletedTasks, getIncompleteTasks, createTask, updateTaskStatus, deleteTask } from '../App/Controllers/TaskController';


const router = express.Router();

router.get('/api/user/:userId/tasks/:password', getTasks)
router.get('/api/user/:userId/tasks-complete/:password', getCompletedTasks)
router.get('/api/user/:userId/tasks-incomplete/:password', getIncompleteTasks)
router.post('/api/user/:userId/tasks/:password', createTask);
router.put('/api/user/:userId/tasks/:taskId/:password', updateTaskStatus);
router.delete('/api/user/:userId/tasks/:taskId/:password', deleteTask);

export {
    router as apiRouter
}
