
const logoutBtn = document.querySelector('#logout')

async function logout() {

    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        window.location.href = "/login"
    } else {
        alert(response.statusText)
    }
    console.log('logout')

}

if (logoutBtn) {
    logoutBtn.addEventListener('click', logout)
}



