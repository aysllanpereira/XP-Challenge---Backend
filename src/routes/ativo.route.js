const express =  require('express');
const router = express.Router();
const AtivoController = require('../controllers/ativo.controller');

router.get('/cliente/:id', AtivoController.getTodosAtivosCliente);
router.get('/ativo/:id', AtivoController.getAtivoPorCodigo);
// router.post('/', AtivoController.);

module.exports = router;
