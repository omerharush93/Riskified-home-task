'use strict';
const http = require('http');
const url = require('url');
const express = require('express');
const fs = require('fs');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const response_var = process.env["RESPONSE"];

// App
const app = express();
app.get('/messages', (req, res) => {
  var url_query = url.parse(req.url, true).query
  console.log(url_query.word)
  fs.appendFile('/cache/output.log', url_query.word + '\r\n', function (err) {
    if (err) return console.log(err);
  });
  res.send(response_var);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
