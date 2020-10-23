<template lang="pug">
.candidate
  AppHeader(:title="'Jobs Listing'")
  RecruiterJobList 
</template>
<script>
import { mapGetters } from 'vuex'
import RecruiterJobList from '~/components/RecruiterJobList'
import AppHeader from '~/components/AppHeader'

export default {
  components: {
    AppHeader,
    RecruiterJobList,
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
  h3
    text-align: center
  main
    flex: 1
    padding: 0 2px
    margin-bottom: 5px
    overflow-y: auto
    width: 100vw
</style>
