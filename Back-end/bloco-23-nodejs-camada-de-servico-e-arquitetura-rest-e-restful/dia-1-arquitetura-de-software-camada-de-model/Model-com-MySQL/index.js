const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const Author = require('./models/Author');

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
