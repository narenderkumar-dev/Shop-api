import axios from "axios"

export const API_BASE_URL = "http://Localhost:5454"
// export const API_BASE_URL = axios.create({
//     baseURL: 'http://localhost:5454', // Adjust with your server's actual base URL
//   });

const jwt = localStorage.getItem("jwt")


export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        "Content-Type":"application/json"
    }
})