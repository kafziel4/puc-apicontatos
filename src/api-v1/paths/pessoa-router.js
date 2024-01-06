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

const inserePessoa = (req, res, next) => {
  pessoaModel.insere(req.body, (err, newObj) => {
    if (err) {
      res.status(400).send(err.message);
    }

    res.json(newObj);
  });
};

pessoaRouter.get('/', listaPessoas);
pessoaRouter.post('/', inserePessoa);

module.exports = pessoaRouter;
