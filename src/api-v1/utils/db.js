const Datastore = require('@seald-io/nedb');

const pessoasDB = new Datastore();
const organizacoesDB = new Datastore();

module.exports = { pessoasDB, organizacoesDB };
