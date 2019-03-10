const mysql = require('mysql');

const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'db_dsp'
});

module.exports = conexao;