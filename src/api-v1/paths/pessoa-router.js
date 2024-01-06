const express = require('express');
const pessoaModel = require('../models/pessoa-model');

const pessoaRouter = express.Router();

const listaPessoas = (req, res, next) => {
  pessoaModel.lista(null, (err, lista) => {
    if (err) {
      res.status(400).send(err.message);
    }

    res.json(lista);
  });
};

pessoaRouter.get('/', listaPessoas);

module.exports = pessoaRouter;
