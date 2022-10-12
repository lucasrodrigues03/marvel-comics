import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts: import.meta.env.VITE_APP_TIMESTAMP,
    apikey: import.meta.env.VITE_APP_API_KEY,
    hash: import.meta.env.VITE_APP_HASH,
  },
})
