var express = require('express');
var middleware = require('../../middleware/auth');
var router = express.Router();
//router.use(middleware.auth)
//var produtosModel = require('../model/produtos/produtosModel');
//var RespostaClass = require('../model/RespostaClass');
var Pedido = require('../../model/pedidos/pedidosModel');

router.route("/pedidos")

    //  BUSCAR TODOS OS PRODUTOS
    .get((req, res) => {
        //SELECT * FROM produto;
        Pedido.findAll().then((pedido) => {
            if (pedido.length > 0) {
                res.json(pedido)
            } else {
                res.json({ mensagem: "NÃO HÁ PEDIDOS CADASTRADOS!" })
            }
        })
    })

    //  CRIAR UM NOVO PEDIDO
    .post((req, res) => {
        let paisEsse = req.body.pais;
        let estadoEsse = req.body.estado;
        let cidadeEssa = req.body.cidade;
        let cepEsse = req.body.cep;
        let ruaEssa = req.body.rua;
        let bairroEsse = req.body.bairro;
        let numeroEsse = req.body.numero;
        let contatoEsse = req.body.contato;
        let produtoEsse = req.body.produto;
        let valorEsse = req.body.valor;
        let imagemEssa = req.body.imagem;

        //INSERT INTO pedido(pais, estado, cidade) VALUES (cate)
        Pedido.create({
            pais: paisEsse,
            estado: estadoEsse,
            cidade: cidadeEssa,
            cep: cepEsse,
            rua: ruaEssa,
            bairro: bairroEsse,
            numero: numeroEsse,
            contato: contatoEsse,
            produto: produtoEsse,
            valor: valorEsse,
            imagem: imagemEssa,
        }).then((pedido) => {
            res.json({ mensagem: "PEDIDO ADICIONADO" })
        })
    })

    router.route("/prodidos/:id")

    //  BUSCAR PRODUTO POR ID
    .get(function(req, res) {
        let id = req.params.id;

         //SELECT * FROM PRODUTO WHERE ID = REQ.PARAMS.ID LIMIT 1;
        Pedido.findOne(
            {where: {id}}
        ).then(function(pedido) {
            if (pedido) {
                res.json(pedido);
            } else {
                res.json({mensagem: "Pedido nao encontrado"})
            }
        })
    })

    

    //  DELETAR UM PRODUTO PELO ID
    .delete(function (req, res) {
        let id = req.params.id;

        //SELECT * FROM PRODUTO WHERE ID = REQ.PARAMS.ID LIMIT 1;
        Pedido.findOne({
            where: { id }
        }).then((pedido) => {
            if (pedido) {
                //DELETE FROM PRODUTO WHERE ID = REQ.PARAMS.ID;
                pedido.destroy().then(() => {
                    res.json({ mensagem: "PEDIDO DELETADO COM SUCESSO" })
                })
            }
        })
    })


module.exports = router;