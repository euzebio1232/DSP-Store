var express = require('express');
var middleware = require('../../middleware/auth');
var router = express.Router();
//router.use(middleware.auth)
//var produtosModel = require('../model/produtos/produtosModel');
//var RespostaClass = require('../model/RespostaClass');
var Produto = require('../../model/produtos/produtosModel');

router.route("/produtos")

    //  BUSCAR TODOS OS PRODUTOS
    .get((req, res) => {
        //SELECT * FROM produto;
        Produto.findAll().then((produto) => {
            if (produto.length > 0) {
                res.json(produto)
            } else {
                res.json({ mensagem: "NÃO HA PRODUTOS CADASTRADOS!" })
            }
        })
    })

    //  CRIAR UM NOVO PRODUTO
    .post((req, res) => {
        let categoriaEssa = req.body.categoria;
        let marcaEssa = req.body.marca;
        let nomeEsse = req.body.nome;
        let tamanhoEsse = req.body.tamanho;
        let valorEsse = req.body.valor;
        let descricaoEssa = req.body.descricao;
        let imagemEssa = req.body.imagem;
        let estoqueEsse = req.body.estoque;
        let referenciaEssa = req.body.referencia;

        //INSERT INTO produto(categoria, nome, descricao) VALUES (cate)
        Produto.create({
            categoria: categoriaEssa,
            marca: marcaEssa,
            nome: nomeEsse,
            tamanho: tamanhoEsse,
            valor: valorEsse,
            descricao: descricaoEssa,
            imagem: imagemEssa,
            estoque: estoqueEsse,
            referencia: referenciaEssa
        }).then((produto) => {
            res.json({ mensagem: "PRODUTO ADICIONADO" })
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
    .put(function (req, res) {
        let id = req.params.id;
        let marca = req.body.marca;
        let nome = req.body.nome;
        let tamanho = req.body.tamanho;
        let valor = req.body.valor;
        let descricao = req.body.descricao;
        let imagem = req.body.imagem;
        let estoqueEsse = req.body.estoque;
        let referenciaEssa = req.body.referencia;
        let novoProduto = { marca: marca, nome: nome, tamanho: tamanho, valor: valor, descricao: descricao, imagem: imagem, estoque: estoqueEsse, referencia: referenciaEssa };

        //SELECT * FROM PRODUTO WHERE ID = REQ.PARAMS.ID LIMIT 1;
        Produto.findOne({
            where: { id }
        }).then((produto) => {
            if (produto) {
                //UPDATE PRODUTO SET NOME = ?, DESCRICAO = ? WHERE ID = ?;
                Produto.update(novoProduto, { where: { id } }).then(() => {
                    res.json({ mensagem: "O PRODUTO " + id + " FOI ATUALIZADO COM SUCESSO" })
                })
            } else {
                res.json({ mensagem: "PRODUTO NÃO ENCONTRADO" })
            }
        })
    })

    //  DELETAR UM PRODUTO PELO ID
    .delete(function (req, res) {
        let id = req.params.id;

        //SELECT * FROM PRODUTO WHERE ID = REQ.PARAMS.ID LIMIT 1;
        Produto.findOne({
            where: { id }
        }).then((produto) => {
            if (produto) {
                //DELETE FROM PRODUTO WHERE ID = REQ.PARAMS.ID;
                produto.destroy().then(() => {
                    res.json({ mensagem: "PRODUTO DELETADO COM SUCESSO" })
                })
            }
        })
    })

//  BUSCAR PRODUTOS POR CATEGORIA
router.route("/produtos/:categoria")
    .get((req, res) => {
        let categoria = req.params.categoria;
        Produto.findAll({ where: { categoria } }).then((produto) => {
            if (produto)
                res.json(produto)
            else
                res.json({ mensagem: 'PRODUTO NÃO ENCONTRADO' })
        })
    })

/*produtosRouter.route("/")
    .get((req, res) => {
        const page_size = req.query.page_size;
        const page_number = req.query.page_number;
        produto.findAll({ limit: page_size, offset: (page_number - 1) * page_size }).then(produto => {
            res.send(produto);
        });
    })*/


module.exports = router;