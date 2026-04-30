
const express = require('express');
const router = express.Router();

const contaController = require('../controllers/conta.controller');
const authMiddlware = require('../middlewares/authMiddlware');

router.post('/deposito', contaController.deposito);
router.post('/saque', contaController.sacar);
router.get('/:codCliente', contaController.saldo);

module.exports = router;