const express = require('express');
const consing = require('consign');
const bodyparser = require('body-parser');

let app = express();

app.use(bodyparser.json());

consing().include('routes').into(app);

app.listen(3000, '127.0.0.1', ()=>{

    console.log('Servidor rodando!');

});