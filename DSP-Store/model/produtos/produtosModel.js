const db = require('../../database/db_connect');

module.exports = class ProdutosModel{

    //Retorna todos os produtos cadastrados  no banco
    static getTodos(callback){
        return db.query("SELECT * FROM produto", callback);
    }

    //Retorna produto pelo seu ID
    static getId(id, callback){
        return db.query("SELECT * FROM produto WHERE id_produto = ?", [id], callback)
    }

    //Retorna produto por categoria
    static getCategoria(categoria, callback){
        return db.query("SELECT * FROM produto WHERE categoria = ?", [categoria], callback)
    }

    //Adiciona produtos
    static adicionar(produto, callback){
        return db.query("INSERT INTO produto (categoria, nome, descricao) VALUES(?, ?, ?)", [produto.categoria, produto.nome, produto.descricao], callback)};

    //Deletar um produto pelo ID
    static deletar(id, callback){
        return db.query("DELETE FROM produto WHERE id_produto = ?", [id], callback)
    }

    //Editar um produto pelo ID
    static editar(produto, callback){
        return db.query("UPDATE produto SET categoria = ?, nome = ?, descricao = ? WHERE id_produto = ?", [produto.categoria, produto.nome, produto.descricao, produto.id_produto], callback)
    }

}//Fim da class Model