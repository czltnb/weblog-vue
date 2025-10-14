import { useCookies } from '@vueuse/integrations/useCookies'

const TOKEN_KEY = 'Authorization'
const cookie = useCookies()

export function getToken(){
    return cookie.get(TOKEN_KEY)
}

export function setToken(token){
    cookie.set(TOKEN_KEY,token)
}

export function removeToken(){
    cookie.remove(TOKEN_KEY)
}