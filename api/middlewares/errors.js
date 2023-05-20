// eslint-disable-next-line no-unused-vars
function errorsHandler(error, _req, res, _next) {
  return res.json(error);
}

function notFoundHandler(_req, res) {
  res.status(404).json({
    message: 'route not found',
  });
}

module.exports = {
  errorsHandler,
  notFoundHandler,
};
