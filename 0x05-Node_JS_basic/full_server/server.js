const express = require('express');

const myRoute = require('./routes/index.js');

const app = express();
const port = 1245;

app.use(express.json());

app.use('/', myRoute);

app.listen(port, () => {});

module.exports = app;
