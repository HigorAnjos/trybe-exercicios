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

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
  );


module.exports = { getAll, getByAuthorId, isValid, create };
