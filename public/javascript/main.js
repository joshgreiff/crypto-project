<<<<<<< HEAD

=======
>>>>>>> 98e65efceb83bdc29c82819b99818c7619c642f1
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
<<<<<<< HEAD

}

if (logoutBtn) {
    logoutBtn.addEventListener('click', logout)
}


=======

}
>>>>>>> 98e65efceb83bdc29c82819b99818c7619c642f1

if (logoutBtn) {
    logoutBtn.addEventListener('click', logout)
}
