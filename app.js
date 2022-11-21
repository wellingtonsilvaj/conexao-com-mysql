
//--------------conexao com BD MySql-------------------------------------

//const MySql = require('mysql');

const mysql  = require('mysql');
const connection = mysql.createConnection({
host     : 'localhost',
user     : 'well',
password : '123456',
database : 'celke'
});

//----consultando banco de dados-----------------------
// connection.connect(function(err) {
//  if (err) {
//  console.error('error connecting: ' + err.stack);
//  return;
// }
 
//  console.log('connected as id ' + connection.threadId);
//   });

//  connection.query('SELECT * FROM users', function(
// err, rows, fields){
//     if(!err){
//          console.log('Resultado:', rows);}
//          else{
//         }
//         console.log('Erro ao realizar a consulta');
        
//     } )

//------adicionando dados --------------------- 
 connection.connect(function(err){
    if (err) console.error('erro ao realizar a conexcao com BD:' + err.stack); return;
 });

//  connection.query("INSERT INTO contas_receber(nome, debito) VALUES('mikaelly ', 500)",function(err, result){
//     if(!err){
//         console.log('usuario cadastrado com sucesso!');
//     }else{
//         console.log('ERRO AO CADASTRAR O USUARIO!')
//     }

//     })

//----------editando registros BD-----------------

// connection.query("UPDATE contas_pagars SET valor = 1900 WHERE id =2", function(err, result){
//     if(!err){
//         console.log('usuario editado com sucesso!');
//     }else{
//         console.log('ERRO: o usuario nao foi editado com sucesso');
//     }
// });

//----------excluindo registros--------------------------

connection.query("DELETE FROM contas_pagars WHERE id = 3 ", function(err, result){
    if(!err){
        console.log("usuario apagado  com sucesso");
    }else{
        console.log("erro: o usuario não foi apagado com sucesso!")
    }
});