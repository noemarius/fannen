import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    /* mode: 'no-cors', */
    /* 'Access-Control-Allow-Origin': '*', */
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
