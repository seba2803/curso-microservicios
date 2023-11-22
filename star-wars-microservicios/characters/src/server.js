const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use('/characters', require('./routes'));

// por si no se accede a ninguna ruta existente en la aplicación
server.use('*', (req, res) => {
  res.status(404).send('Not found');
});

// este es el manejador de errores de express
server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
