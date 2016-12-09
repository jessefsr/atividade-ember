/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var clientesRouter = express.Router();

  clientesRouter.get('/', function(req, res) {
    res.send({
      'clientes': [{
        id: '1',
        nome: 'Onezino'
      }, {
        id: '2',
        nome: 'Jesse'
      }, {
        id: '3',
        nome: 'Alexandre'
      }]
    });
  });

  clientesRouter.post('/', function(req, res) {
    res.status(201).send(req.body);
  });

  clientesRouter.get('/:id', function(req, res) {
    res.send({
      'clientes': {
        id: req.params.id,
        documentos: ['1-1','1-2','1-3']
      }
    });
  });

  clientesRouter.put('/:id', function(req, res) {
    res.send({
      'clientes': {
        id: req.params.id
      }
    });
  });

  clientesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/clientes', require('body-parser').json());
  app.use('/api/clientes', clientesRouter);
};
