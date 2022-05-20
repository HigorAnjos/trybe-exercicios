const connection = require('./connection');

function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
  return {
    id,
    firstName,
    lastName,
    email,
  };
}

function create({ firstName, lastName, email, password }) {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  
  return connection.execute(
    query,
    [firstName, lastName, email, password])
      .then(([result]) => ({ id: result.insertId, firstName, lastName, email })
  );
}

function findAll() {
	return connection.execute('SELECT * from users;')
	.then(([results]) => results.map(formatUser));
}

function findById(id) {
	return connection.execute('SELECT * FROM users WHERE id = ?', [id])
		.then(([results]) => {
		if (results[0]) return formatUser(results[0]);
		return null;
		});
}

async function updateUser(id, { firstName, lastName, email, password }) {
	const query = ` UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? `;

	await connection.execute(query, [firstName, lastName, email, password, id]);

	return findById(id);
}


module.exports = { formatUser, create, findAll, findById, updateUser };