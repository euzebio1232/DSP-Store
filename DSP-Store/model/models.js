var Sequelize = require('sequelize');

let sequelize = new Sequelize('db_dsp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// CREATE TABLE PRODUTOS
const Produto = sequelize.define('produto', {
    categoria: Sequelize.STRING,
    nome: Sequelize.STRING,
    descricao: Sequelize.STRING
})

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

Produto.sync();
Usuarios.sync();

module.exports = Produto;
module.exports = Usuarios;