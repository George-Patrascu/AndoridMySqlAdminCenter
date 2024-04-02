const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// connection pool
const conn = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'P@ssword1234',
    database: 'my_db',
    insecureAuth: true

    });
    

 // Get all users
 app.get('/users', (req, res) => {
    conn.query('SELECT * FROM users', (err, rows) => {
      if (err) throw err;
      res.json(rows);
      
    });
  });
