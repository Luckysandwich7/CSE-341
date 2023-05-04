const express = require('express');
const routes = express.Router();

const charactersController = require('../controllers/contacts');

routes.get('/', charactersController.getAll);

routes.get('/:id', charactersController.getSingle);

routes.post('/', charactersController.createContact);

routes.put('/:id', charactersController.updateContact);

routes.delete('/:id', charactersController.deleteContact);

module.exports = routes;
