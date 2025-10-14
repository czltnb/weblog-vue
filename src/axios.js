import axios from 'axios'

//创建 axios 实例
const instance = axios.create({
    baseURL: "/api", //基础URL
    timeout: 7000, //请求超时时间
})

export default instance; //别写成暴露 axios 了