import * as requester from '../services/requester.js'

export const login = async(email,password)=>{
    return requester.post('http://localhost:3030/users/login', {email,password})
}

export const logout = async()=>{
    return requester.get('http://localhost:3030/users/logout')
}

export const create = async(data)=>{
    return requester.post('http://localhost:3030/data/quests', data)
}

export const register = async(email,password)=>{
    return requester.post('http://localhost:3030/users/register', {email,password})
}