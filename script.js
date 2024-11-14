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