const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = express();
const port = 3000;
const router = express.Router();

const usuariosRouter = require('./router/usuario/usuariosRouter');
const produtosRouter = require('./router/produto/produtosRouter');
const pedidosRouter = require('./router/pedido/pedidoRouter');

api.use(cors());

api.use(bodyparser.urlencoded({extended: true}));
api.use(bodyparser.json());

router.get("/", (req, res) => res.json({
    mensagem: 'API ONLINE!'
}));

api.use('/', usuariosRouter);
api.use('/', produtosRouter);
api.use('/', pedidosRouter);

//api.use('/', usuariosRouter);
//api.use('/',produtos', produtosRouter);

api.listen(port);
console.log('API INICIALIZADA COM SUCESSO...');