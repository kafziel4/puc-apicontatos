const express = require('express');
const apiRouter = require('./api-v1/api-router');

const app = express();
const port = 5500;

app.use('/api/v1', apiRouter);
app.use('/', (req, res) => res.send('-- API Contatos --'));

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
