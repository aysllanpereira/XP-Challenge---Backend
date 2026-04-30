
const express =  require('express');
const router = express.Router();
const jwtLogin = require('../controllers/cliente.controller');

router.post('/', jwtLogin.login);

module.exports = router;