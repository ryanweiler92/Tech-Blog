async function loginFormHandler(event) {
    event.preventDefault();
  
    

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    

    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
  
    console.log('sign me up')

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    console.log(username);
    console.log(password);

    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        console.log('this did not work')
        alert(response.statusText);
      }
    }
  }
  
  function testFunction(event){
    event.preventDefault()
    console.log('this is a test')
  }
  document.querySelector('#log-in-btn').addEventListener('click', loginFormHandler);
  
  document.querySelector('#sign-up-btn').addEventListener('click', signupFormHandler);