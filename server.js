// Import des modules (packages npm) nécessaires au projet
const express = require("express");
let Message = require("./models/message");
const db = require("./models");


// SYNC with db
db.sequelize.sync();

// RESET db and SYNC with it
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// initialisation d'express
const app = express();
// constante pour gérer le port émétteur
const port = 8000;

// utiliser le module json d'express
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
require('./routes/message.routes')(app);
require('./routes/user.routes')(app);


// // GET Home -> Tester la réponse du serveur
// app.get("/", (request, response) => {
//   // console.log('Hello');
//   response.json({ message: "Ok" });
// });

// GET index --> Lister tous les messages dans un json
// app.get("/index", (request, response) => {
//   Message.all(function (messages) {
//     response.json({ messages: messages });
//   });
// });

// // GET show --> Afficher un message par rapport à son id
// app.get("/:id", (request, response) => {
//   Message.find(request.params.id, function (message) {
//     response.json({ message: message });
//   });
// });

// // POST create a message
// app.post("/create", (request, response) => {
//   console.log("body:", request.body.content);
//   Message.create(request.body.content, (err, data) => {
//     // response.json({ message: "created"});
//     if (err)
//       response.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Message.",
//       });
//     else response.status(200).send(data);
//   });
// });

// // POST delete a message
// app.delete("/:id", (request, response) => {
//   //console.log("body:", request.params.id);
//   Message.delete(request.params.id, (err, data) => {
//     // response.json({ message: "created"});
//     if (err) {
//       console.log(err);
//       response.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Message.",
//       });
//     } else {
//       console.log("result delete: ", data);
//       response.status(200).send(data);
//     }
//   });
// });

// // PUT with id (to edit/update) 

// app.put('/:id', (request, respoonse) => {
//   console.log("body: ", request.body.content, "id: ", request.params.id)
//   Message.updateById(request.params.id, request.body.content, (err, data) => {
//       if (err) {
//           if (err.kind === "not_found") {
//               response.status(404).send({
//                   message: `Not found message with id ${request.params.id}`
//               })
//           } else {
//               response.status(500).send({
//                   message: "Error updating message with id " + request.params.id
//               })
//           }
//       } else response.send(data)
//   })
// })


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
