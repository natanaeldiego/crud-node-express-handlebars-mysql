const express = require('express');
const PessoaController = require('./controllers/PessoaController');
const routes = express.Router();

routes.get('/', PessoaController.index);
routes.post('/pessoa', PessoaController.store);
routes.get('/pessoa', PessoaController.store);
routes.get('/pessoa/:id', PessoaController.update);
routes.get('/pessoa/delete/:id', PessoaController.destroy);

module.exports = routes;