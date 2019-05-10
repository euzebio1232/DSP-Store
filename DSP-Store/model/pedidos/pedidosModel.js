var Sequelize = require('sequelize');

var sequelize = require("../../database/db_connect");

// CREATE TABLE PRODUTOS
const Pedido = sequelize.define('pedido', {
    pais: Sequelize.STRING,
    estado: Sequelize.STRING,
    cidade: Sequelize.STRING,
    cep: Sequelize.STRING,
    rua: Sequelize.STRING,
    bairro: Sequelize.STRING,
    numero: Sequelize.STRING,
    contato: Sequelize.STRING,
    produto: Sequelize.STRING,
    valor: Sequelize.STRING,
    imagem: Sequelize.STRING
})

Pedido.sync();

module.exports = Pedido;