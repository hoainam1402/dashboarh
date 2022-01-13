export default ($axios) => ({
  async getProfile() {
    return await $axios.$get('/api/auth/me')
  },
  async changePassword(data) {
    return await $axios.$put('/api/auth/change-password', data)
  }
})
