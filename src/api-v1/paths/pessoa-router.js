const express = require('express');
const { validate } = require('jsonschema');
const pessoaModel = require('../models/pessoa-model');
const pessoaSchema = require('../models/schemas');

const pessoaRouter = express.Router();

const listaPessoas = (req, res, next) => {
  pessoaModel.lista(null, (err, lista) => {
    if (err) {
      return res.status(400).send(err.message);
    }

    return res.json(lista);
  });
};

const inserePessoa = (req, res, next) => {
  const result = validate(req.body, pessoaSchema);

  if (result.errors.length > 0) {
    return res.status(400).send(result.errors.map((e) => e.stack));
  }

  pessoaModel.insere(req.body, (err, newObj) => {
    if (err) {
      return res.status(400).send(err.message);
    }

    return res.json(newObj);
  });
};

pessoaRouter.get('/', listaPessoas);
pessoaRouter.post('/', inserePessoa);

module.exports = pessoaRouter;
