module.exports = function(app) {
    const users = require('../controllers/user.controller');
    //GET index --> Lister tous les users et leurs users dans json
    app.get('/users/index', users.findAll);

    //POST index --> Create new user
    app.post('/users/index', users.create);

    // GET show --> show user based on his id
    app.get('users/:userId', users.findByPk);

    //PUT show --> Modify user based on his id
    app.put('/users/:userId', users.update);

    //DELET show --> Delete user based on his id
    app.delete('users/:usersId', users.delete);
}