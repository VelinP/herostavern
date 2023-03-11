const request = async (method,url , data)=>{
    try{
        const user = localStorage.getItem('auth')
        const auth = JSON.parse(user || '{}')
        let headers = {}

        if(auth.accessToken){
            headers['X-Authorization'] = auth.accessToken
        }

        
        let buildrequest;
        if(method === "GET"){
            buildrequest = fetch(url)
        }
        else{
            buildrequest = fetch(url,{
                method,
                headers:
                    {
                    ...headers,
                    'content-type': 'application/json'

                    },
                body: JSON.stringify(data)
            })
        }
        const reponse = await buildrequest
        const result = await reponse.json()
        return result
    }catch(error){
        console.log(error);
    }
}

export const get = request.bind({}, 'GET')
export const post = request.bind({}, 'POST')
export const put = request.bind({}, 'PUT')
export const del = request.bind({}, 'DELETE')