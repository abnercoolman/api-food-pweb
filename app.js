const express = require('express');
const mongoose = require('mongoose');
const foodRoutes = require('./routes/foodRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Configuração do banco de dados
mongoose.connect('mongodb+srv://userApp:4qIMd8jx6Slgv4KV@aulaweb.rlz1wvs.mongodb.net/', {
    retryWrites: true,
    w: 'majority',
    appName: 'AulaWeb'
});

app.use(express.json());

// Rotas
app.use('/api/foods', foodRoutes);

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});