const db = require('../utils/db');

const insere = (obj, callback) => {
  db.pessoasDB.insert(obj, callback);
};

const lista = (params, callback) => {
  db.pessoasDB.find(params, callback);
};

const altera = () => {};

const exclui = () => {};

module.exports = {
  insere,
  lista,
  altera,
  exclui,
};
