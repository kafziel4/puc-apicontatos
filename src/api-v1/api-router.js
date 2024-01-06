const express = require('express');
const pessoaRouter = require('./paths/pessoa-router');
const organizacaoRouter = require('./paths/organizacao-router');

const apiRouter = express.Router();

apiRouter.use('/pessoas', pessoaRouter);
apiRouter.use('/organizacoes', organizacaoRouter);
apiRouter.use('/', (req, res, next) => res.send('API V1'));

module.exports = apiRouter;
