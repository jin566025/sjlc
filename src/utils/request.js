import axios from 'axios'

const service = axios.create({
	//baseURL: process.env.BASE_API, // api的base_url
	baseURL:"http://127.0.0.1:3000",
//	baseURL:"http://101.37.163.225:8888/JKMarket/rest",
	timeout: 10000000 // 请求超时时间
})



service.interceptors.request.use(function (config) {  //配置发送请求的信息
	
  return config;
}, function (error) {
  return Promise.reject(error);
});

service.interceptors.response.use(function (response) { //配置请求回来的信息
  
  return response;
}, function (error) {

  return Promise.reject(error);
});

export default service