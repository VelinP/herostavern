import * as requester from '../services/requester.js'

export const login = async(email,password)=>{
    try{
        return requester.post('http://localhost:3030/users/login', {email,password})
    }catch(error){
        console.log('login error')
    }
    
}



export const create = async(data)=>{
    try{
        return requester.postauth('http://localhost:3030/data/quests', data)
    }catch{
        console.log('create error')
    }
}

export const register = async(email,password)=>{
    try{
        return requester.post('http://localhost:3030/users/register', {email,password})
    }catch(err){
        console.log(err)
    }
}

export const getAll = async() =>{
   try{
    return requester.get('http://localhost:3030/data/quests')

   }
   catch(err){
    console.log(err)
   }
}



export const getOne = async(id)=>{
    try{
        return requester.get(`http://localhost:3030/data/quests/${id}`)
    }catch(err){
        console.log(err)
    }
}

export const deleteOne = async(id) =>{
    try{
        return requester.del(`http://localhost:3030/data/quests/${id}`)
    }catch(err){
        console.log(err)
    }
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
    
    try{
        const data = await requester.get('http://localhost:3030/data/quests')
        return data.splice(-3)
    }catch(err){
        console.log(err)
    }
    
    
    
        

}

export const edit = async(id, info)=>{
    try{
        const data = await requester.put(`http://localhost:3030/data/quests/${id}`, info)
        return data
    }catch(err){
        console.log(err)
    }
}

export const userinfo = async()=>{
   try
   {
        const token = GetToken()
        const data = await fetch('http://localhost:3030/users/me/', {headers:{'X-Authorization': token}})
        const readydata = await data.json()
        return readydata
   }
   
   catch(err){
        console.log(err)
   }
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