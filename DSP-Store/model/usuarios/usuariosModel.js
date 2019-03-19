var Sequelize = require('sequelize');

/*let sequelize = new Sequelize('db_dsp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})*/

// CREATE TABLE PRODUTOS
/*const Produto = sequelize.define('produto', {
    categoria: Sequelize.STRING,
    marca: Sequelize.STRING,
    nome: Sequelize.STRING,
    tamanho: Sequelize.STRING,
    valor: Sequelize.STRING,
    descricao: Sequelize.STRING,
})*/

var sequelize = require("../../database/db_connect");

// CREATE TABLE USUARIOS
const Usuarios = sequelize.define('usuarios', {
    categoria: Sequelize.STRING,
    nome: Sequelize.STRING,
    sobrenome: Sequelize.STRING,
    email: Sequelize.STRING,
    sexo: Sequelize.CHAR(1), //DEFINE UM VARCHAR DE TAMANHO 1 OU M OU F.
    cpf: Sequelize.DECIMAL(11,0),
    senha: Sequelize.STRING,

})

Usuarios.sync();
//Produto.sync();


//module.exports = Produto;
module.exports = Usuarios;