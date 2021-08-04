const newPostHandler = async (event) => {
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const title = document.querySelector('#post-title').value.trim();
    const post = document.querySelector('#post-input').value.trim();

    console.log(`the ${title} and ${post}`);
  
    if (title && post) {
      const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ title, post }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert('Error! A title and post input are required to post.');
      }
    }
  };
  
  document
    .querySelector('.newpost-form')
    .addEventListener('click', newPostHandler);

