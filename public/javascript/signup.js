const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#user-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                passwordh
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Error! Please review your username, email, and password.')
        }
    }
}

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);