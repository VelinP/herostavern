import * as requester from '../services/requester.js'

export const login = async(email,password)=>{
    return requester.post('http://localhost:3030/users/login', {email,password})
}

export const logout = async()=>{
    return requester.get('http://localhost:3030/users/logout')
}