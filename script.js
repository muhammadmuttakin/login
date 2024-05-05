function login() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    
    if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
      alert('Username: ' + usernameInput.value + '\nPassword: ' + passwordInput.value);
      // Add code to redirect to another page or perform other actions
    } else {
      alert('Masukkan Username dan Password');
    }
}
