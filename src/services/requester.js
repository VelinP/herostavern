import * as authservice from './authservice.js'

export const get = async(url) =>{
    const data = await fetch(url)
    const readydata = await data.json()
    return readydata
}

export const post = async(url, data) =>{
    const readydata = await fetch(url, {method:'POST', headers:{'content-type': "application.json"}, body: JSON.stringify(data)})
    return readydata.json()
}

export const postauth = async(url,data ) =>{
    let token = authservice.GetToken()
    const readydata = await fetch(url, {method:'POST', headers:{'content-type': "application.json", 'X-Authorization': token}, body: JSON.stringify(data)})
    return readydata.json()

}

export const del = async(url) =>{
    let token = authservice.GetToken()
    const readydata = await fetch(url, {method:'DELETE', headers:{'content-type': "application.json", 'X-Authorization': token}})
    return readydata.json()
}