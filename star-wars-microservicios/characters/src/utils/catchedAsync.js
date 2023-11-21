module.exports = (fn) => (req, res, next) =>
  fn(req, res).catch((error) => {
    // next(error) hace que continue el proceso
    //hacia el manejador de errores de express
    next(error);
  });
