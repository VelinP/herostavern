import * as request from './requester.js'
const base_url = 'http://localhost:3030/users'

const saveUser = (user) => {
    if(user.accessToken){
        localStorage.setItem('user',JSON.stringify(user))
    }
}

export const login = (username,password) => 
    request.post(`${base_url}/login`,{username, password})
    .then(user => {
        saveUser(user)
        return user
    })

export const getUser = () =>{
    let serializeduser = localStorage.getItem('user')

    if(serializeduser){
        let user = JSON.parse(serializeduser)
        return user
    }

}

const deleteUser = ()=>{
    localStorage.removeItem('user')
}

export const register = (username,password) => 
    request.post(`${base_url}/register`,{username, password})
    .then(user => {
        saveUser(user)
        return user
    })

export const GetToken = ()=>{
    return getUser()?.accessToken
}

export const logout =()=>
    fetch(`${base_url}/logout`,{headers: {'X-Authorization': GetToken()}})
    .then(()=> {deleteUser()
    })



    export const deleteOne = (carId)=> request.del(`http://localhost:3030/data/cars/${carId}`)
    export const getone = (carId) => request.get(`http://localhost:3030/data/cars/${carId}`)
    export const edit = (carId, carData) => request.put(`http://localhost:3030/data/cars/${carId}`,carData)
    export const getAll = ()=> {
        const url = 'http://localhost:3030/data/cars?sortBy=_createdOn%20desc'
        return request.get(url)
    
    }
    