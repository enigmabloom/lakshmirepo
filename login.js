document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
      
        window.location.href = "main.html";
     
    } else {
       
        alert('Invalid credentials, please try again.');
    }
});
