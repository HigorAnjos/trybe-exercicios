const express = require('express');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/user', middlewares.createUser);
app.get('/user', middlewares.getAllUsers);
app.get('/user/:id', middlewares.findUserById);
app.put('/user/:id', middlewares.updateUser);

app.use(middlewares.error);

const PORT = 3000;

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });