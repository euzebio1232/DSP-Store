var express = require('express');

var router = express.Router();
//var produtosModel = require('../model/produtos/produtosModel');
//var RespostaClass = require('../model/RespostaClass');
var Produto = require('../model/models');

router.route("/produtos")

    //  BUSCAR TODOS OS PRODUTOS
    .get((req, res) => {
        //SELECT * FROM produto;
        Produto.findAll().then((produto) => {
            if (produto.length > 0) {
                res.json(produto)
            } else {
                res.json({mensagem: "NÃO HA PRODUTOS CADASTRADOS!"})
            }
        })
    })

    //  CRIAR UM NOVO PRODUTO
    .post((req, res) => {
        let categoriaEssa = req.body.categoria;
        let nomeEsse = req.body.nome;
        let descricaoEssa = req.body.descricao;
        
        //INSERT INTO produto(categoria, nome, descricao) VALUES (cate)
        Produto.create({
            categoria: categoriaEssa,
            nome: nomeEsse,
            descricao: descricaoEssa
        }).then((produto) => {
            res.json({mensagem: "PRODUTO ADICIONADO"})
        })
    })


router.route("/produtos/:id")

    //  BUSCAR PRODUTO POR ID
    /*.get(function(req, res) {
        let id = req.params.id;

         //SELECT * FROM PRODUTO WHERE ID = REQ.PARAMS.ID LIMIT 1;
        Produto.findOne(
            {where: {id}}
        ).then(function(produto) {
            if (produto) {
                res.json(produto);
            } else {
                res.json({mensagem: "Produto nao encontrado"})
            }
        })
    })*/

    //  EDITAR UM PRODUTO PELO ID
    .put(function(req, res) {
        let id = req.params.id;
        let nome = req.body.nome;
        let descricao = req.body.descricao;
        let novoProduto = { nome: nome, descricao: descricao };

         //SELECT * FROM PRODUTO WHERE ID = REQ.PARAMS.ID LIMIT 1;
        Produto.findOne({
            where: { id }
        }).then((produto) => {
            if (produto) {
                //UPDATE PRODUTO SET NOME = ?, DESCRICAO = ? WHERE ID = ?;
                Produto.update(novoProduto, {where: { id }}).then(() => {
                    res.json({mensagem: "Produto " + id + " foi atualizado com sucesso"})
                })
            } else {
                res.json({mensagem: "Produto nao encontrado"})
            }
        })
    })

    //  DELETAR UM PRODUTO PELO ID
    .delete(function(req, res) {
        let id = req.params.id;
        
        //SELECT * FROM PRODUTO WHERE ID = REQ.PARAMS.ID LIMIT 1;
        Produto.findOne({
            where: {id}
        }).then((produto) => {
            if (produto) {
                //DELETE FROM PRODUTO WHERE ID = REQ.PARAMS.ID;
                produto.destroy().then(() => {
                    res.json({mensagem: "Produto deletado com sucesso"})
                })
            }
        })
    })

//  BUSCAR PRODUTOS POR CATEGORIA
router.route("/produtos/:categoria")
    .get((req, res) => {
        let categoria = req.params.categoria;
       Produto.findAll({where: {categoria}}).then((produto) => {
           if (produto) 
               res.json(produto)
           else
                res.json({mensagem: 'Produto nao encontrado'})
       }) 
    })


module.exports = router;