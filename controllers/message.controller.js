const db = require("../models");
const User = db.users;
const Message = db.messages;

//POST / CREATE a new User

exports.create = (req, res) => {
  //Save to MySQL database
  Message.create({
    content: req.body.content,
  })
    .then((message) => {
      res.send(message);
    })
    .catch((err) => {
      console.log(">> Error while creating message : ", err);
    });
};

// GET / READ all Messages
exports.findAll = (req, res) => {
  Message.findAll({
    // include: ["user"],
  }).then((messages) => {
    // Send all messages to Client
    res.send(messages);
  });
};
// FIND a message by Id (GET/READ)
exports.findByPk = (req, res) => {
  Message.findByPk(req.params.messageId, {
    include: ["user"],
  }).then((message) => {
    res.send(message);
  });
};

// UPDATE a message by Id (PUT/ UPDATE)
exports.update = (req, res) => {
  const id = req.params.messageId;
  Message.update(
    { content: req.body.content },
    { where: { id: req.params.messageId } }
  ).then(() => {
    res
      .status(200)
      .send({ message: "updated successfully a message with id = " + id });
  });
};
// DELETE a Message by <id (DELETE/DELETE)
exports.delete = (req, res) => {
  const id = req.params.messageId;
  console.log("req params", req.params);
  Message.destroy({
    where: { id: id },
  }).then(() => {
    res
      .status(200)
      .send({ message: "deleted successfully a message with id = " + id });
  });
};
