import axios from 'axios'

const api = axios.create({
    baseURL: 'https://zumthor.herokuapp.com/'
})

export default api