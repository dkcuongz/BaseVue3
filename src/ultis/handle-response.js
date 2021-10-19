import { showToastError } from "./toast-message";

export function handleResponse(_response) {
    const {data, status, config} = _response
    const resSuccessStatus = [200, 201, 202, 204]
    if (resSuccessStatus.includes(status)) {
        return data.data;
    } else if (status === 304) {
        return config.data
    }
}

export function handleError(_response) {
    let msg = ''
    let errors = []
    if (!_response) {
        msg = 'Error'
    } else {
        const {status, data = {}} = _response || {}
        switch (status) {
            case 400:
                errors = data.data || []
                break
            case 409:
                msg = data.message || ''
                errors = data.data || []
                break
            case 401:
                return window.location.href = `${process.env.VUE_APP_ROOT_API}/login`
            case 403:
            case 404:
                msg = data.message || ''
                break
            case 500:
                msg = data.message || ''
                break
        }
    }
    if (errors.length) {
        showToastError(errors);
        return errors
    } else {
        showToastError(msg);
        return msg
    }
}
