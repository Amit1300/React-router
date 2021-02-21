import axios from "axios";


const secureaxios=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
})


secureaxios.interceptors.request.use(config=>
    {config.headers["Authorization"]='token'
    return config
})


secureaxios.interceptors.response.use(response=>{
    console.log("success")
    return response

},error=>console.log("error"))

export default secureaxios;

