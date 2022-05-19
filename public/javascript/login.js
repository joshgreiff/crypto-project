async function signupFormHandler(event){
    event.preventDefault()

    const username = document.querySelector(".username-signup").value.trim()
    const name = document.querySelector(".name-signup").value.trim()
    // const email = document.querySelector('.email-signup').value.trim()
    const password = document.querySelector('.password-signup').value.trim()

    if (username && password && name) {
        const response = await fetch('/api/users/signup', {
          method: 'post',
          body: JSON.stringify({
            username,
            name,
            password,
          }),
          headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            console.log('success');
          } else {
            alert(response.statusText);
          }
    }
}

async function loginFormHandler(event){
    event.preventDefault()

    const username = document.querySelector('.username-login').value.trim() 
    const password = document.querySelector('.password-login').value.trim()

    if (username && password) {
        const response = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({
            username,
            password,
          }),
          headers: { 'Content-Type': 'application/json' }
        })
        
        if (response.ok) {
            console.log('success');
          } else {
            alert(response.statusText);
          }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler)
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler)