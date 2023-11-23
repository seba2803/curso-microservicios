const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(morgan('dev'));

//? redirige la peticion al contenedor del microservicio Characters
app.use(
  '/characters',
  createProxyMiddleware({
    target: 'http://characters:8001',
    // cambia el origen hacia la url de arriba(target)
    changeOrigin: true,
  })
);

//? redirige la peticion al microservicio Films
app.use(
  '/films',
  createProxyMiddleware({
    target: 'http://films:8002',
    // cambia el origen hacia la url de arriba(target)
    changeOrigin: true,
  })
);

//? redirige la peticion al microservicio Planets
app.use(
  '/planets',
  createProxyMiddleware({
    target: 'http://planets:8003',
    // cambia el origen hacia la url de arriba(target)
    changeOrigin: true,
  })
);

app.listen(8000, () => {
  console.log('Gateway on port 8000');
});
