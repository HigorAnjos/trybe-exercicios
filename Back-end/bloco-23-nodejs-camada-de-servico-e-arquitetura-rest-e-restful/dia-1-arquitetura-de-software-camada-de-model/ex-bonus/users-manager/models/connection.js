const mysql = require('mysql2/promise');

// Criamos uma "pool" de conexões
const connection = mysql.createPool({
	host: 'localhost',
	user: 'seu_usuario',
	password: 'sua_senha',
	database: 'users_crud'});

// Retornamos o pool criado para que possa ser utilizado pelo model.
module.exports = connection;