require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');

const PORT = preocess.env.port || 3001;

require('./config/database.js');

app.use(logger('dev'));
app.use(express.json());


app.use(express.static(path.join(_dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(_dirname, 'build', 'index.html'))
});

app.listen(PORT, () => {
  console.log(`Quick! Get everything they needed to do and send it through port ${PORT}`)
})