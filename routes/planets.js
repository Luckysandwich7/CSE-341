const express = require('express');
const routes = express.Router();

const planetsController = require('../controllers/planets');
const validation = require('../middleware/validate');

routes.get('/', planetsController.getAll);

routes.get('/:id', planetsController.getSingle);

routes.post('/', validation.savePlanet, planetsController.createContact);

routes.put('/:id', validation.savePlanet, planetsController.updateContact);

routes.delete('/:id', planetsController.deleteContact);

module.exports = routes;
