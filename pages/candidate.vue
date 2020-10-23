<template lang="pug">
.candidate
  AppHeader(:title="'Find Jobs'")
  main
    CandidateJobList
  //- h3 {{ jobs }}  
</template>
<script>
import { mapGetters } from 'vuex'
import CandidateJobList from '~/components/CandidateJobList'
import AppHeader from '~/components/AppHeader'
export default {
  components: {
    // JobList,
    AppHeader,
    CandidateJobList,
  },
  computed: {
    ...mapGetters({
      jobs: 'jobs/jobs',
    }),
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
