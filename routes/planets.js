const express = require('express');
const routes = express.Router();

const planetsController = require('../controllers/planets');

routes.get('/', planetsController.getAll);

routes.get('/:id', planetsController.getSingle);

routes.post('/', planetsController.createContact);

routes.put('/:id', planetsController.updateContact);

routes.delete('/:id', planetsController.deleteContact);

module.exports = routes;
