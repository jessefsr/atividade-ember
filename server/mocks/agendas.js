/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var agendasRouter = express.Router();

  agendasRouter.get('/', function(req, res) {
    res.send({
      'agendas': []
    });
  });

  agendasRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  agendasRouter.get('/:id', function(req, res) {
    res.send({
      'agendas': {
        id: req.params.id
      }
    });
  });

  agendasRouter.put('/:id', function(req, res) {
    res.send({
      'agendas': {
        id: req.params.id
      }
    });
  });

  agendasRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/agendas', require('body-parser').json());
  app.use('/api/agendas', agendasRouter);
};
