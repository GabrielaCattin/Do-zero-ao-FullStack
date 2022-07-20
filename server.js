const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./BackEnd/routes');

const app = express();


app.use(bodyParser.json());

console.log("Nome do Banco de Dados do MongoDB", process.env.MONGO_DB);
console.log("Nome do Usuário no MongoDB", process.env.MONGO_USER);



app.get('/', (req, res) => {
    res.json({
        'sucess': true
    });
})

app.use('/api', api);

const PORT = process.env.PORT;
app.listen(PORT);
//npm run dev 