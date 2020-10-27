import axios from 'axios'
import Vue from 'vue'
import _ from 'lodash'

const state = () => ({
  jobs: [],
  job: {},
  jobAction: null,
})

const getters = {
  jobs: (state) => {
    return state.jobs
  },
  job: (state) => {
    return state.job
  },
  jobAction: (state) => {
    return state.jobAction
  },
}

const mutations = {
  getJobs(state, jobs) {
    state.jobs = jobs
  },
  getJob(state, job) {
    state.job = job
  },
  setJobAction(state, jobAction) {
    state.jobAction = jobAction
  },
  addJob(state, job) {
    state.jobs.push(job)
    state.job = {}
  },
  updateJob(state, job) {
    Vue.set(state.job, job.key, job.value)
  },
  updateJobs(state, job) {
    if (state.job) {
      console.log(job.id)
      const i = _.findIndex(state.jobs, { id: job.id })
      Vue.set(state.jobs, i, job)
    }
  },
  resetJobs(state, job) {
    const i = _.findIndex(state.jobs, { id: job.id })
    Vue.delete(state.jobs, i)
  },
}
const actions = {
  setJob(context, job) {
    context.commit('getJob', job)
  },
  setJobAction(context, jobAction) {
    context.commit('setJobAction', jobAction)
  },
  getJobs(context) {
    return axios.get('https://main-fastapi.herokuapp.com/jobs').then((res) => {
      context.commit('getJobs', res.data)
    })
  },
  getJob(context, job) {
    return axios
      .get(`https://main-fastapi.herokuapp.com/jobs/${job.id}`)
      .then((res) => {
        context.commit('getJob', res.data)
      })
  },
  postJob(context, job) {
    console.log(job)
    return axios
      .post(`https://main-fastapi.herokuapp.com/jobs/add/`, job)
      .then((res) => {
        context.commit('addJob', res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  },
  putJob(context, job) {
    // console.log(job.job)
    return axios
      .put(`https://main-fastapi.herokuapp.com/jobs/update/${job.id}`, {
        ...job.job,
      })
      .then((res) => {
        context.commit('getJob', res.data)
        context.commit('updateJobs', res.data)
      })
  },
  updateJob(context, job) {
    context.commit('updateJob', job)
  },
  deleteJob(context, job) {
    return axios
      .delete(`https://main-fastapi.herokuapp.com/jobs/delete/${job.id}`)
      .then((res) => {
        context.commit('resetJobs', job)
      })
  },
  applyJob(context, job) {
    console.log(job)
    return axios
      .get(`https://main-fastapi.herokuapp.com/jobs/${job.id}/apply`)
      .then((res) => {
        console.log(res.data)
      })
  },
}
export default { state, getters, actions, mutations }
