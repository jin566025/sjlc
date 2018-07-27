var Fly=require("flyio/dist/npm/wx")
var fly=new Fly
//配置请求基地址
fly.config.baseURL='http://127.0.0.1:3000'
fly.interceptors.request.use((config,promise)=>{
    return config;
})
fly.interceptors.response.use((config,promise)=>{
    return config;
})
//配置请求基地址
