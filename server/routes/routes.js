const UserController = require ('../controllers/users.js');

module.exports = (app) => {
  app.get("/users/index", UserController.index);
}