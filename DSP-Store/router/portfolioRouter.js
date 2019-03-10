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
})

module.exports = router;