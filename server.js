
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Configuração de conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'animeflix'
});

// Conectando ao banco de dados
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});

// Rota GET para listar todas as pessoas
app.get('/api/pessoas', (req, res) => {
    db.query('SELECT * FROM pessoa', (err, results) => {
        if (err) {
            console.error('Erro ao buscar dados:', err);
            res.status(500).send('Erro ao buscar dados');
            return;
        }
        res.send(results);
    });
});

// Iniciando o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});

// HTML + JavaScript no frontend
// Chama a API para exibir a lista de personagens
fetch('http://localhost:3000/api/pessoa')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('character-list');
        data.forEach(person => {
            list.innerHTML += `<p>${person.nome} (${person.idade}) - ${person.email}</p>`;

        });
    })
.catch(error => console.error('Erro:', error));