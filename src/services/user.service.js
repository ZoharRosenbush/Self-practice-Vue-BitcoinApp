import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    updateUserInfo,
    getEmptyUser
}

async function login(credentials) {
    try {
        const users = await storageService.query(STORAGE_KEY)
        const user = users.find(user => user.username === credentials.username &&
            user.password === credentials.password)
        delete user.password
        localStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        return user

    } catch (err) {
        console.log('Err in login process', err);
    }
}

async function signup(newUser) {
    try {
        const user = await storageService.post(STORAGE_KEY, newUser)
        localStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
        return user

    } catch (err) {
        console.log('Err in signup process', err);
    }
}

function logout() {
    localStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    return Promise.resolve()
}

function getLoggedinUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function updateUserInfo(updatedUser) {
    return storageService.put(STORAGE_KEY, updatedUser)
}

function getEmptyUser() {
    return {
        username: '',
        password: '',
        fullname: '',
    }
}

// Test Data
// userService.signup({username: 'muki', password: 'muki1', fullname: 'Muki Noya', score: 22})
// userService.login({username: 'muki', password: 'muki1'})