const Sequelize = require('sequelize');
const sequelize = new Sequelize('ecommerce', 'root', '12345', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

module.exports = sequelize;