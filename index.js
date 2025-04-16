const express = require('express');
const sequelize = require('./src/database');
const User = require('./src/models/User');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('API Sequelize + Express'));
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.listen(3000, async () => {
  await sequelize.sync();
  console.log('Servidor rodando em http://localhost:3000');
});