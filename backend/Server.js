const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'Account',
});

db.connect((err) => {
  if (err) {
    console.log('MySQL Connection Error: ', err);
  } else {
    console.log('MySQL Connected');
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = `SELECT * FROM Login WHERE username = ? AND password = ?`;

  db.query(query, [username, password], (err, results) => {
    if (err) {
      res.status(500).send('Database error');
    } else if (results.length > 0) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
