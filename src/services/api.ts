import axios from 'axios'

export const timeStamp = import.meta.env.VITE_APP_TIMESTAMP
export const apikey = import.meta.env.VITE_APP_API_KEY
export const hash = import.meta.env.VITE_APP_HASH

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts: '1665000255',
    apikey: 'a9e55eb2ade905057bfef0a711b8ff0b',
    hash: 'b567cf163765d10aee1cc37b1e90ee2b',
    offset: 50,
  },
})
