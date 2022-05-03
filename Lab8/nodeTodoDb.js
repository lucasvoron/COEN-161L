const mysql = require('mysql');

const config = require('./config').config;

exports.addTodo = function (sessionId, todo, callback) {
  const con = mysql.createConnection(config);
  // call con.connect();
  con.connect(err => {
    if (err) {
      return callback(err);
    }
    console.log("connection success")
    const sql = "INSERT INTO Todos (description, sessionId) VALUES (?, ?);";
    con.query(sql, [todo, sessionId], function(err, result) {
      if(err)
        callback(err);
    });
    con.end();
  });
};

exports.getTodos = function (sessionId, callback) {
  const con = mysql.createConnection(config);
  // call con.connect();  
  con.connect(err => {
    if (err) {
      return callback(err);
    }
    const sql = "SELECT * FROM Todos;";
    con.query(sql, [sessionId], function(err, results) {
      if(err)
        callback(err, results);
    });
    con.end();
  });
};