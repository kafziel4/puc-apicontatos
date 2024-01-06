const express = require('express');

const pessoaRouter = express.Router();

pessoaRouter.use('/', (req, res, next) => res.send('ENDPOINT PESSOA'));

module.exports = pessoaRouter;
