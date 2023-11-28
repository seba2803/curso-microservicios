const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use('/films', require('./routes'));

server.use('*', (req, res) => {
  res.status(404).send('Not found');
});

server.use((err, req, res, next) => {
  res.status(err.response ? err.response.status : err.statusCode || 500).send(
    err.response
      ? {
          error: true,
          status: err.message,
          message: err.response.data.message,
        }
      : { error: true, message: err.message }
  );
});

module.exports = server;
