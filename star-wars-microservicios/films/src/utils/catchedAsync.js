module.exports = (fn) => {
  return (req, res, next) => {
    // fn es el controlador
    fn(req, res).catch((err) => {
      // next(err) redirige el error
      // hacia el manejador de errores de express
      next(err);
    });
  };
};
