//Variables
const express = require('express');
const mysql = require('mysql2');
const router= express.Router();
const app = express();

//Crear mysql
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'temporal',
    database:'nodejs'
  });
//Conexion mysql
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
// app.get('/', function(req,res){
//     res.sendFile(`${__dirname}/public/inicio.html`);
// });
// app.get('/index', function(req,res){
//     res.sendFile(`${__dirname}/public/index.html`);
// });

//Rutas
app.get("/animes", (req,res)=>{
    let query = con.query('SELECT * FROM animes', (error, result)=>{
        if(error){
            console.log(error);
        }
        res.status(200).json(result);
    })
});
//Servidor
const server= app.listen(8888,()=>{
    console.log('Servidor web iniciado http://localhost:8888')
});