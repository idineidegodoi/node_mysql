const Sequelize = require('sequelize');

const sequelize = new Sequelize('celke', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

//O código abaixo está comentado pelo fato de que ele deve ser utilizado apenas
//para testar se o banco conectou, depois nãoé mais utilizado.
/*
sequelize.authenticate()
    .then(function () {
        console.log("Conexão com o banco de dados realizada com sucesso!");
    }).catch(function () {
        console.log("ERRO: Conexão com o banco de dados não realizada!");
    });*/

module.exports = sequelize;