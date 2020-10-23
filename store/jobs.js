import axios from 'axios'

const state = () => ({
  jobs: null,
})

const getters = {
  jobs: (state) => {
    return state.jobs
  },
}

const mutations = {
  getJobs(state, jobs) {
    state.jobs = jobs
  },
}
const actions = {
  getJobs(context) {
    return axios.get('https://main-fastapi.herokuapp.com/jobs').then((res) => {
      context.commit('getJobs', res.data)
    })
  },
}
export default { state, getters, actions, mutations }
