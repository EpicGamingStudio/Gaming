document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate saving to Google Cloud
    console.log("User Signed Up:", {name, email, password});
    localStorage.setItem('user', JSON.stringify({name, email, password}));
    window.location.href = 'home.html'; // Redirect to home
});

document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        window.location.href = 'home.html'; // Redirect to home
    } else {
        alert("Invalid credentials");
    }
});

window.onload = function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && document.getElementById('profile-name')) {
        document.getElementById('profile-name').innerText = user.name;
        document.getElementById('profile-id').innerText = user.email;  // Using email as ID for simplicity
    }
};

