import axios from "axios";
import axiosRetry from "axios-retry";
import app from "../main";
import { handleResponse, handleError } from "../ultis/handle-response";

const BASE_URL = process.env.VUE_APP_ROOT_API
const rmAxios = axios.create({
    baseURL: BASE_URL
})

rmAxios.defaults.headers.post['Content-Type'] = 'application/json'
rmAxios.defaults.headers.put['Content-Type'] = 'application/json-patch+json'
rmAxios.interceptors.request.use((config) => {
    app.config.globalProperties.$progress.start()
    return config
}, (e) => {
    return Promise.reject(e)
})

rmAxios.interceptors.response.use(res => {
        app.config.globalProperties.$progress.finish()
        return handleResponse(res)
    },
    (e) => {
        // app.config.globalProperties.$progress.fail()
        return Promise.reject(handleError(e.response))
    })

axiosRetry(rmAxios, {
    retries: 5,
    /**
     * Processing gradually increases the interval between each retry,
     * 5 seconds, 10 seconds, 20 seconds...
     * Stop the retry if error continues for about 1 minute.
     */
    retryDelay: (retryCount) => {
        return Math.pow(2, retryCount - 1) * 5000
    }
})
export default rmAxios
