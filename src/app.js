require('babel-polyfill');
const express = require('express');

const app = express();
const PORT = 4040;

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Gobble template is listening on port ${PORT}.`);
});

module.exports = app;
