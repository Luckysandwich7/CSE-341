const express = require('express');
const routes = express.Router();

const charactersController = require('../controllers/characters');
const validation = require('../middleware/validate');


routes.get('/', charactersController.getAll);

routes.get('/:id', charactersController.getSingle);

routes.post('/', validation.saveCharacter, charactersController.createContact);

routes.put('/:id', validation.saveCharacter, charactersController.updateContact);

routes.delete('/:id', charactersController.deleteContact);

module.exports = routes;
