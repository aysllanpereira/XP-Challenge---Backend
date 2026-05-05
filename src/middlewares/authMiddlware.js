
require('dotenv').config();
const jwt = require('jsonwebtoken');
const { log } = require('../utils/logger');

module.exports = function auth(req, res, next) {

    log('Verificando o token');

    const authHeader = req.headers.authorization;
    console.log('aqui', req.headers);

    if (!authHeader) {
        log('Token não fornecido');
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
        const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;
        console.log(req.user);
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Token inválido!' });
    }

};