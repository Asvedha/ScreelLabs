<template lang="pug">
.candidate
  AppHeader(:title="'Apply Jobs'")
    .actions(slot="actions")
      span.i.fas.fa-search  &nbsp;
      input(type="text", v-model="search", placeholder="Search Jobs.." :style="{ 'border': '2px solid black !important' }")
      nuxt-link.btn(to="/") Logout
  main
    CandidateJobList(:filteredList="searchFilter")
    ToastNotification(v-if="message && message !== ''", :success="success")
      |  {{ message }}
</template>
<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import CandidateJobList from '~/components/job/CandidateJobList'
// import ToastNotification from '~/components/common/ToastNotification'
export default {
  components: {
    CandidateJobList,
    // ToastNotification,
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapGetters({
      jobs: 'jobs/jobs',
      message: 'jobs/message',
      success: 'jobs/success',
    }),
    searchFilter() {
      const result = _.filter(this.jobs, (job) => {
        return job.job_title.toLowerCase().includes(this.search.toLowerCase())
      })
      return result
    },
  },
  mounted() {
    this.$store.dispatch('jobs/getJobs')
  },
}
</script>
<style lang="sass" scoped>
.app
  // background-color: #f0f0f0
  h3
    text-align: center
  main
    flex: 1
    padding: 0 2px
    margin-bottom: 5px
    overflow-y: auto
    width: 100vw
</style>
