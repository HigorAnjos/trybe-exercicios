const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const author = require('./models/author');
const book = require('./models/books');

app.use(express.json());

app.get('/authors', async (_req, res) => {
	const authors = await author.getAll();

	return res.status(200).json(authors);
});
app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!author.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});


app.get('/books', async (_req, res) => {
  const books = await book.getAll();

  return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await book.getByAuthorId(id);

  if(!books) return res.status(404).json({ message: 'Not found' });

  return res.status(200).json(books);
});

app.post('books', async (req, res) => {
  const { title, author_id } = req.body;
  if (!book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  book.create(title, author_id);
  return res.status(201).json({ message: 'Livro criado com sucesso! '});
});


app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
