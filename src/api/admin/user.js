import axios from "@/axios.js";

//请求登录接口
export function login(username,password){
    return axios.post("/login",{username,password})
}
