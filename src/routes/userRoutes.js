const userController = require('../controllers/userController');
const User = require('../models/User');

module.exports = (app) => {
  app.get('/api/users', userController.fetch),
    app.get('/api/users/:id', userController.get),
    app.post('/api/users', userController.create);
  app.delete('/api/users/:id', userController.delete);
  app.put('/api/users/:id', userController.edit);
};
