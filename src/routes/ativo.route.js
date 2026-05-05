const express =  require('express');
const router = express.Router();
const AtivoController = require('../controllers/ativo.controller');

router.get('/cliente/:id', AtivoController.listarTodosAtivosPorCliente);
router.get('/ativo/:id', AtivoController.listarAtivoPorId);
// router.post('/', AtivoController.);

module.exports = router;
