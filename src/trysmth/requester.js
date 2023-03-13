import * as authservice from './authservice.js'

async function request(method,url, data){
    let options = {}
    let token = authservice.GetToken()
    if(method !== 'GET'){
        options.method = method
        options.headers ={'content-type': 'application/json'}
    }
    if (token){
        options.headers ={'X-Authorization': token}
    }

    options.body = JSON.stringify(data)

    return fetch(url,options).then(res=> res.json())

}

export const get = request.bind({}, 'GET')
export const post = request.bind({}, 'POST')
export const put = request.bind({}, 'PUT')
export const del = request.bind({}, 'DELETE')
export const patch = request.bind({}, 'PATCH')

