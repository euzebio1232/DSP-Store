/*const mysql = require('mysql');

const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'db_dsp'
});

module.exports = conexao;*/

var Sequelize = require('sequelize');

let sequelize = new Sequelize('db_dsp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;