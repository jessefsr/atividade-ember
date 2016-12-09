documentos = {
  '1-1' : {
    id: '1-1',
    nome: 'rg',
    numero: '2345234-34'
  },
  '1-2':     {
    id: '1-2',
    nome: 'CRM',
    numero: '12345234-34'
  },
  '1-3':     {
    id: '1-3',
    nome: 'cpf',
    numero: 'asd2345234-34'
  }
};
/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var documentosRouter = express.Router();

  documentosRouter.get('/', function(req, res) {
    res.send({
      'documentos': [
        {
          id: '1-1',
          nome: 'rg',
          numero: '2345234-34'
        },
        {
          id: '1-2',
          nome: 'CRM',
          numero: '12345234-34'
        },
        {
          id: '1-3',
          nome: 'cpf',
          numero: 'asd2345234-34'
        },
      ]
    });
  });

  documentosRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  documentosRouter.get('/:id', function(req, res) {
    res.send({
      'documentos': documentos[req.params.id]
    });
  });

  documentosRouter.put('/:id', function(req, res) {
    res.send({
      'documentos': {
        id: req.params.id
      }
    });
  });

  documentosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/documentos', require('body-parser').json());
  app.use('/api/documentos', documentosRouter);
};
