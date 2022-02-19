function newPostFormDisplay() {

    document.getElementById('form-container').setAttribute("class", "container mt-4 bg-light rounded")
};

async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }


document.querySelector('#submit-post-btn').addEventListener('click', newFormHandler);
document.querySelector('#new-post-btn').addEventListener('click', newPostFormDisplay);