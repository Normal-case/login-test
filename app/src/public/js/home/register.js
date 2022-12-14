'use strict'

const id = document.querySelector('#id'),
    name = document.querySelector('#name'),
    password = document.querySelector('#password'),
    confirmPassword = document.querySelector('#confirm-password'),
    registerbtn = document.querySelector('#button')

const register = () => {
    if(!id.value) return alert('Please input id')
    if(password.value !== confirmPassword.value) return alert('password does not match')
    
    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
    }

    fetch('/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = '/login'
        } else {
            alert(res.msg)
        }
    })
    .catch((err) => {
        console.error(new Error('system error'))
    })
}
    

registerbtn.addEventListener('click', register)

