import * as requester from '../services/requester.js'

export const login = async(email,password)=>{
    debugger;
    return requester.post('http://localhost:3030/users/login', {email,password})
    
}



export const create = async(data)=>{
    return requester.postauth('http://localhost:3030/data/quests', data)
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

export const get3 = async()=>{
    const data = await requester.get('http://localhost:3030/data/quests')
    return data.splice(-3)


}

export const edit = async(id, info)=>{
    const data = await requester.put(`http://localhost:3030/data/quests/${id}`, info)
    return data
}

export const userinfo = async()=>{
    const token = GetToken()
    const data = await fetch('http://localhost:3030/users/me/', {headers:{'X-Authorization': token}})
    const readydata = await data.json()
    return readydata
}

export const logout = async()=>{
    try{
        const token = GetToken()
        const data = await fetch('http://localhost:3030/users/logout/', {headers:{'X-Authorization': token}})
        return data
    }
    catch(err){
        console.log(err)
    }
    
}