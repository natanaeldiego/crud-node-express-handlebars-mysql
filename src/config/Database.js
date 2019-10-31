const Sequelize = require('sequelize');
const sequelize = new Sequelize('pessoahub', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}