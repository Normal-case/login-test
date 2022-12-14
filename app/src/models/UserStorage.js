'use strict'

class UserStorage {
    static #users = {
        id: ['chan', 'bok', 'yeo'],
        password: ['123', '1234', '1111'],
        name: ['찬복', '여찬', '복여']
    }

    static getUsers = (...fields) => {
        const users = this.#users
        const newUsers = fields.reduce((newUser, field) => {
            if (users.hasOwnProperty(field)) {
                newUser[field] = users[field]
            }
            return newUser
        }, {})
        return newUsers
    }

    static getUserInfo(id) {
        const users = this.#users
        const idx = users.id.indexOf(id)
        const usersKeys = Object.keys(users) // => [id, password, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx]
            return newUser
        }, {})

        return userInfo
    }

    static save(userInfo) {
        const users = this.#users
        users.id.push(userInfo.id)
        users.name.push(userInfo.name)
        users.password.push(userInfo.password)
        return { success: true }
    }
}

module.exports = UserStorage