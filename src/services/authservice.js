import * as requester from '../services/requester.js'

export const login = async(email,password)=>{
    return requester.post('http://localhost:3030/users/login', {email,password})
}

export const logout = async()=>{
    debugger;
    try{
        return fetch('http://localhost:3030/users/logout',{headers: {'X-Authorization': GetToken()}})
    }
    catch(err){
        console.log(err)
    }
    
}

export const create = async(data)=>{
    return requester.post('http://localhost:3030/data/quests', data)
}

export const register = async(email,password)=>{
    return requester.post('http://localhost:3030/users/register', {email,password})
}

export const getAll = async() =>{
    return requester.get('http://localhost:3030/data/quests')

}

export const getOne = async(id)=>{
    return requester.get(`http://localhost:3030/data/quests/${id}`)
}

export const deleteOne = async(id) =>{
    return requester.del(`http://localhost:3030/data/quests/${id}`)
}

export const getUser = () =>{
    let serializeduser = localStorage.getItem('auth')

    if(serializeduser){
        let user = JSON.parse(serializeduser)
        return user
    }

}

export const GetToken = ()=>{
    return getUser()?.accessToken
}