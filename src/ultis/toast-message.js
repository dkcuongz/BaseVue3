import Swal from 'sweetalert2/dist/sweetalert2.js'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export function showToastSuccess(message) {
    if (!message) return
    Toast.fire({
        icon: 'success',
        title: message
    })
}

export function showToastError(error) {
    if (!error) return
    if (Array.isArray(error)) {
        error = error.map((x) => x + '</br>').join("");
    }
    Toast.fire({
        icon: 'error',
        title: error
    })
}
