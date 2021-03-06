export default function ({ $axios, $toast, store, redirect }) {
  $axios.onResponse((response) => {
    return response
  })

  $axios.onError((error) => {
    $toast.error(error.response?.data?.message)

    if (error.response?.data?.errors) {
      store.commit('form/VALIDATION_ERRORS', error.response?.data?.errors)
    }

    const code = error.response?.status
    if (code === 401) {
      redirect('/login')
    }
  })
}
