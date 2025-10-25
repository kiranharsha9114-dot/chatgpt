document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulated login check (replace with API call)
  if (username === 'admin' && password === 'admin123') {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').textContent = 'Login successful!';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').textContent = 'Invalid credentials!';
  }
});
