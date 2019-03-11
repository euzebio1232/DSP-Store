var express = require('express');
var router = express.Router();
var produtosModel = require('../model/produtos/produtosModel');
var RespostaClass = require('../model/RespostaClass');

//BUSCA/RETORNA TODOS OS PRODUTOS CADASTRADOS NO DB
router.get("/", function(req, res, next){

    produtosModel.getTodos(function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro!';
            console.log('erro', erro);
        }else{
            resposta.dados = retorno;
        }

        res.json(resposta);

    })
});

//BUSCA/RETORNA OS PRODUTOS POR ID
router.get("/:id?", function(req, res, next){

    produtosModel.getId(req.params.id, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro!';
            console.log('erro', erro);
        }else{
            resposta.dados = retorno;
        }

        res.json(resposta);

    })
});

//CADASTRA UM NOVO PRODUTO
router.post("/?", function(req, res, next){

    produtosModel.adicionar(req.body, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro!';
            console.log('erro', erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "CADASTRO DE PRODUTO REALIZADO COM SUCESSO!"
            }else{
                resposta.erro = true;
                resposta.msg = "[ERRO] NÃO FOI POSSIVEL REALIZAR O CADASTRO DO PRODUTO!"
            }
        }
        console.log('resp', resposta)
        res.json(resposta);

    })
});

//DELETA UM PRODUTO EXISTENTE PELO ID
router.delete("/:id", function(req, res, next){

    produtosModel.deletar(req.params.id, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro!';
            console.log('erro', erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "PRODUTO EXCLUIDO COM SUCESSO!"
            }else{
                resposta.erro = true;
                resposta.msg = "[ERRO] NÃO FOI POSSIVEL EXCLUIR O PRODUTO!"
            }
        }
        console.log('resp', resposta)
        res.json(resposta);

    })
});

//EDITA UM PRODUTO EXISTENTE PELO ID
router.put("/", function(req, res, next){

    produtosModel.editar(req.body, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro!';
            console.log('erro', erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "PRODUTO EDITADO COM SUCESSO!"
            }else{
                resposta.erro = true;
                resposta.msg = "[ERRO] NÃO FOI POSSIVEL EDITAR O PRODUTO!"
            }
        }
        console.log('resp', resposta)
        res.json(resposta);

    })
})

module.exports = router;