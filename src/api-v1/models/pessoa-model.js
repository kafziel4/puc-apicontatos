const insere = () => {};

const lista = (params, callback) => {
  const fakeList = [
    {
      id: 5,
      nome: 'Francis Ford Copolla',
      email: 'copolla@hollywood.com',
      telefone: '001-124-2111',
      organizacao: null,
      tags: ['cinema', 'trabalho'],
    },
  ];

  callback(null, fakeList);
};

const altera = () => {};

const exclui = () => {};

module.exports = {
  insere,
  lista,
  altera,
  exclui,
};
