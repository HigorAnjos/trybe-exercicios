const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./controllers/Authors');
const rescue = require('express-rescue');

const app = express();

app.use(bodyParser.json());
const errorMiddleware = require('./middlewares/error');

app.get('/authors', rescue(Author.getAll));
app.get('/authors/:id', rescue(Author.findById));
app.post('/authors', rescue(Author.createAuthor));

app.use(errorMiddleware);

const PORT = 33000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});