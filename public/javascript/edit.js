const editForm = async (event) => {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const title = document.querySelector("#post-title").value.trim();
    const post = document.querySelector("#post-text").value.trim();

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, post }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Error! Please try again.');
    }

}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);