const key = process.env.EXPO_PUBLIC_API_KEY;


export const API_KEY ={
    method:'GET',
    headers:{
        accept:'application/json',
        Authorization:`Bearer ${key}`
    }
}