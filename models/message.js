// let connection = require('../config/db.config');

// class Message {

// static create (content, cb) {
//     connection.query('INSERT INTO messages SET content = ?, created_at = ?', [content, new Date()], (err, result) => {
//       if (err) throw err
//       console.log("created message:", { content });
//       cb(result);
//     })
//   }

//   static delete (id, cb) {
//     connection.query('DELETE FROM messages WHERE id= ?', [id], (err, result) => {
//       if (err) cb(err)
//       console.log("deleted message:", { id });
//       cb(null, result);
//     })
//   }

//    static all (cb) {
//     connection.query('SELECT * FROM messages', (err, result) => {
//       if (err) throw err
//       cb(result);
//     })
//   };

//   static find (id, cb) {
//     connection.query('SELECT * FROM messages WHERE id = ? LIMIT 1', [id], (err, rows) => {
//       if (err) throw err
//       cb(new Message())
//     })
//   }
  
// // PUT with id (to edit/update) 
// static updateById (id, content, cb) {
//   connection.query('UPDATE messages SET content = ? WHERE id = ?', [content, id], (err, result) => {
//       if (err) throw err
//       if (result.affectedRows == 0) {
//           cb({ kind: "not_found" }, null)
//           return
//       }
//       console.log("updated message: ", { id: id, content})
//       cb(result)
//   })
// }
// }

// module.exports = Message 