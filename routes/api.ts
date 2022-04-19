import express from 'express';
import { getTasks, getCompletedTasks, getIncompleteTasks, createTask, updateTaskStatus, deleteTask } from '../App/Controllers/TaskController';


const router = express.Router();

router.get('/api/user/:userId/tasks/:password', getTasks)
    .get('/api/user/:userId/tasks-complete/:password', getCompletedTasks)
    .get('/api/user/:userId/tasks-incomplete/:password', getIncompleteTasks)
    .post('/api/user/:userId/tasks/:password', createTask)
    .put('/api/user/:userId/tasks/:taskId/:password', updateTaskStatus)
    .delete('/api/user/:userId/tasks/:taskId/:password', deleteTask);

export {
    router as apiRouter
}
