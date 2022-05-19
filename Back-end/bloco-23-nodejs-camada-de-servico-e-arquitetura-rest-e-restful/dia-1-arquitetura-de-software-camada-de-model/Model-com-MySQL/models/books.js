const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;',
  );
  return books;
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books WHERE id = ?;',
    [id]
  );
  if (books.length == 0) return  null;

  return books;
};

module.exports = { getAll, getByAuthorId };
