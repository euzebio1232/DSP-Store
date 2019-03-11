const db = require('../../database/db_connect');

module.exports = class PortfolioModel{

    //Retorna todos os produtos cadastrados  no banco
    static getTodos(callback){
        return db.query("SELECT * FROM portfolio", callback);
    }

    //Retorna produto pelo seu ID
    static getId(id, callback){
        return db.query("SELECT * FROM portfolio WHERE id_portfolio = ?", [id], callback)
    }

    //Adiciona produtos
    static adicionar(portfolio, callback){
        return db.query("INSERT INTO portfolio (descricao, detalhes) VALUES(?, ?)", [portfolio.descricao, portfolio.detalhes], callback)};

    static deletar(id, callback){
        return db.query("DELETE FROM portfolio WHERE id_portfolio = ?", [id], callback)
    }
}