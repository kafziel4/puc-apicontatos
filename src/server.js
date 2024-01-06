const express = require('express');

const app = express();
const port = 5500;

app.get('/doc', (req, res, next) => {
  res.send('Documentação da aplicação!');
});

app.get('/api/v1', (req, res, next) => {
  res.send('API V1 no ar!');
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
