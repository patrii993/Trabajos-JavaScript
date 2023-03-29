const express = require('express');
const app = express();



app.get('/', function(req,res){
    res.sendFile(`${__dirname}/public/inicio.html`);
});
app.get('/clientes', function(req,res){
    res.sendFile(`${__dirname}/public/clientes.html`);
});

const server= app.listen(8888,()=>{
    console.log('Servidor web iniciado http://localhost:8888')
});