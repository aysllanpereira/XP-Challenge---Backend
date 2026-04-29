
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./src/models/index');

require('./src/models/cliente.model');
require('./src/models/conta.model');
require('./src/models/ativo.model');
require('./src/models/investimento.model');

const contaRoutes = require('./src/routes/conta.routes');
const investimentoRoutes = require('./src/routes/investimento.routes');
const ativoRoutes = require('./src/routes/ativo.route');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/conta', contaRoutes);
app.use('/investimento', investimentoRoutes);
app.use('/ativos', ativoRoutes);

const PORT = 3000;

db.sequelize.authenticate()
  .then(() => {
    console.log('Banco conectado!');

    return db.sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Tabelas criadas!');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT} 🚀`);
    });
  })
  .catch(err => console.error('Erro:', err));