'use strict'

const id = document.querySelector('#id'),
    password = document.querySelector('#password'),
    loginbtn = document.querySelector('button')

const login = () => {
    const req = {
        id: id.value,
        password: password.value,
    }

    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = '/'
        } else {
            alert(res.msg)
        }
    })
    .catch((err) => {
        console.error(new Error('system error'))
    })
}
    

loginbtn.addEventListener('click', login)

