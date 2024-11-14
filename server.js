const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'animeflix'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados');
});