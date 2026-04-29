
const express = require('express');
const router = express.Router();

const investimentoController = require('../controllers/investimento.controller');

router.post('/comprar', investimentoController.comprar);
router.post('/vender', investimentoController.vender);
router.get('/:codCliente', investimentoController.listar);


module.exports = router;