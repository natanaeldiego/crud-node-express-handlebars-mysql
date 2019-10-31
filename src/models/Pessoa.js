const db = require('../config/Database');

const Pessoa = db.sequelize.define('pessoa', {
    nome: {
      type: db.Sequelize.STRING,
      allowNull: false
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    }
});

module.exports = Pessoa;