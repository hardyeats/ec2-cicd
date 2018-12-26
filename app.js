'use strict'
const express = require('express');
const app = express();
const PORT = process.env.port || 8080;

app.get('/', (req, res) => {
  res.send('hello, world')
})

app.listen(PORT, () => {
  console.log(`app is listening for ${PORT} port`)
});