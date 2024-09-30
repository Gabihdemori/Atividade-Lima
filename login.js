document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    window.location.href = "home.html" 

    if (username === 'aluno' && password === 'senai123') {
        errorMessage.textContent = '';
        alert('Bem Vindo!');
        
    } else {
        errorMessage.textContent = 'Usuário ou senha inválidos!';
    }
});