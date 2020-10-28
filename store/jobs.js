import axios from 'axios'
import Vue from 'vue'
import _ from 'lodash'

const state = () => ({
  jobs: [],
  job: {},
  jobAction: null,
  message: '',
  success: '',
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
  message: (state) => {
    return state.message
  },
  success: (state) => {
    return state.success
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
      const i = _.findIndex(state.jobs, { id: job.id })
      Vue.set(state.jobs, i, job)
    }
  },
  resetJobs(state, job) {
    const i = _.findIndex(state.jobs, { id: job.id })
    Vue.delete(state.jobs, i)
  },
  flashMessage(state, msg) {
    state.message = msg.message
    state.success = msg.success
  },
  clearMessage(state, message) {
    state.message = ''
  },
}
const actions = {
  getMain(context) {
    return axios
      .get('https://main-fastapi.herokuapp.com/')
      .then((res) => {
        const response = res.data
        const msg = { message: response[0], success: true }
        context.commit('flashMessage', msg)
        setTimeout(function () {
          context.commit('clearMessage')
        }, 2000)
      })
      .catch((e) => {
        const msg = { message: e, success: false }
        context.commit('flashMessage', msg)
        setTimeout(function () {
          context.commit('clearMessage')
        }, 2000)
      })
  },
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
    return axios
      .post(`https://main-fastapi.herokuapp.com/jobs/add/`, job)
      .then((res) => {
        context.commit('addJob', res.data)
        const msg = { message: 'Job Created successfully', success: true }
        context.commit('flashMessage', msg)
        setTimeout(function () {
          context.commit('clearMessage')
        }, 2000)
      })
      .catch((e) => {
        const msg = { message: e, success: false }
        context.commit('flashMessage', msg)
        setTimeout(function () {
          context.commit('clearMessage')
        }, 2000)
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
        const msg = { message: 'Job Updated successfully', success: true }
        context.commit('flashMessage', msg)
        setTimeout(function () {
          context.commit('clearMessage')
        }, 2000)
      })
      .catch((e) => {
        const msg = { message: e, success: false }
        context.commit('flashMessage', msg)
        setTimeout(function () {
          context.commit('clearMessage')
        }, 2000)
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
        const msg = { message: 'Job deleted successfully', success: true }
        context.commit('flashMessage', msg)
        setTimeout(function () {
          context.commit('clearMessage')
        }, 2000)
      })
      .catch((e) => {
        const msg = { message: e, success: false }
        context.commit('flashMessage', msg)
        setTimeout(function () {
          context.commit('clearMessage')
        }, 2000)
      })
  },
  applyJob(context, job) {
    return axios
      .get(`https://main-fastapi.herokuapp.com/jobs/${job.id}/apply`)
      .then((res) => {
        const response = res.data
        const msg = { message: response[0], success: true }
        context.commit('flashMessage', msg)
        setTimeout(function () {
          context.commit('clearMessage')
        }, 4000)
      })
      .catch((e) => {
        const msg = { message: e, success: false }
        context.commit('flashMessage', msg)
        setTimeout(function () {
          context.commit('clearMessage')
        }, 2000)
      })
  },
}
export default { state, getters, actions, mutations }
