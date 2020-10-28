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
export default {
  components: {
    CandidateJobList,
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
  beforeMount() {
    this.$store.dispatch('jobs/getMain')
  },
  mounted() {
    this.$store.dispatch('jobs/getJobs')
  },
}
</script>
<style lang="sass" scoped>
.app
  h3
    text-align: center
  main
    flex: 1
    padding: 0 2px
    margin-bottom: 5px
    overflow-y: auto
    width: 100vw
</style>
