import UsersService from '@/services/users-service'

export default {
  async getUsers ({ commit }) {
    try {
      const users = (await UsersService.getUsers()).data
      commit('setUsers', users)
    } catch (err) {
      console.log(err.toString())
    }
  }
}
