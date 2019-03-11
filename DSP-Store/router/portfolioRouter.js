var express = require('express');
var router = express.Router();
var dspModel = require('../model/portfolio/PortfolioModel');
var RespostaClass = require('../model/RespostaClass');

router.get("/", function(req, res, next){

    dspModel.getTodos(function(erro, retorno){
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

router.get("/:id?", function(req, res, next){

    dspModel.getId(req.params.id, function(erro, retorno){
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

router.post("/?", function(req, res, next){

    dspModel.adicionar(req.body, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro!';
            console.log('erro', erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "Cadastro realizado com sucessso!"
            }else{
                resposta.erro = true;
                resposta.msg = "Erro ao realizar o cadastro!"
            }
        }
        console.log('resp', resposta)
        res.json(resposta);

    })
});

router.delete("/:id", function(req, res, next){

    dspModel.deletar(req.params.id, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro!';
            console.log('erro', erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "Objeto excluido com sucesso!"
            }else{
                resposta.erro = true;
                resposta.msg = "Não foi possivel excluir o objeto!"
            }
        }
        console.log('resp', resposta)
        res.json(resposta);

    })
});

router.put("/", function(req, res, next){

    dspModel.editar(req.body, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro!';
            console.log('erro', erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "Objeto editado com sucesso!"
            }else{
                resposta.erro = true;
                resposta.msg = "Não foi possivel editar o objeto!"
            }
        }
        console.log('resp', resposta)
        res.json(resposta);

    })
})

module.exports = router;