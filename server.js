'use strict';

const express = require('express');
const app = express();

const path = require('path');

app.use(express.json());
app.use(express.static('public'));

const serveFileFromRoot = (res, relativePath) =>
  res.sendFile(path.join(`${__dirname}/${relativePath}`));

const serveHome = (_, res) => serveFileFromRoot(res, 'index.html');

// routes
app.get('/', serveHome);

const notifyServerStart = () =>
  console.log(`Web server listening at http://localhost:${port}/`);

const port = process.env.PORT || 1111;

app.listen(port, notifyServerStart);
