const express = require('express');

const organizacaoRouter = express.Router();

organizacaoRouter.use('/', (req, res, next) => res.send('ENDPOINT ORGANIZACAO'));

module.exports = organizacaoRouter;
