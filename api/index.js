import profile from '@/api/profile'

export default ($axios) => ({
  profile: profile($axios)
})
