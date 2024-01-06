const pessoaSchema = {
  type: 'object',
  properties: {
    nome: {
      type: 'string',
      description: 'nome da pessoa',
    },
    email: {
      type: 'string',
      description: 'nome da pessoa',
    },
    telefone: {
      type: 'string',
      description: 'nome da pessoa',
    },
    tags: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  required: ['nome', 'email'],
};

module.exports = pessoaSchema;
