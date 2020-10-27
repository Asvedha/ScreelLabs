<template lang="pug">
.candidate
  AppHeader(:title="'Find Jobs'")
    .actions(slot="actions")
      nuxt-link.btn(to="/") Logout
  main
    CandidateJobList
    ToastNotification(v-if="message && message !== ''")
      |  {{ message }}
</template>
<script>
import { mapGetters } from 'vuex'
import CandidateJobList from '~/components/job/CandidateJobList'
// import ToastNotification from '~/components/common/ToastNotification'
export default {
  components: {
    CandidateJobList,
    // ToastNotification,
  },
  computed: {
    ...mapGetters({
      jobs: 'jobs/jobs',
      message: 'jobs/message',
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
