
async function login(event) {
    const response = await fetch('/login', {
        method: 'get',
        
        headers: { 'Content-Type': 'application/json' }
      })
      console.log(response)
}

async function logout() {
  

        const response = await fetch('/api/users/logout', {
            merhod: 'post',
            headers: { 'Content-Type' : 'application/json' }
        })
    
        if(response.ok){
            document.location.replace('/')
        }else{
            alert(response.statusText)
        }
        console.log('logout')

    }

document.querySelector('#login').addEventListener('click', login)
document.querySelector('#logout').addEventListener('click', logout)

