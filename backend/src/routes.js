const express = require('express');

const TaskController = require('./controllers/TaskController');

const routes = express.Router();

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.create);
routes.delete('/tasks/:id', TaskController.delete);

module.exports = routes;