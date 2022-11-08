module.exports = function(app) {
    const messages = require('../controllers/message.controller');
    //GET index --> Lister tous les users et leurs messages dans json
    app.get('/messages/index', messages.findAll);

    //POST index --> Create new message
    app.post('/messages/index', messages.create);

    // GET show --> show user based on his id
    app.get('/messages/:messageId', messages.findByPk);

    //PUT show --> Modify user based on his id
    app.put('/messages/:messageId', messages.update);

    //DELET show --> Delete user based on his id
    app.delete('/messages/:messageId', messages.delete);
} 