/**
 * Controller wrapper to manage errors
 * @param {object} controllerAction a controller to execute inside a try… catch… block
 * @returns a controller as middleware function
 */
module.exports = (controllerAction) => (req, res, next) => {
  try {
    controllerAction(req, res, next);
  } catch (err) {
    next(err);
  }
};
