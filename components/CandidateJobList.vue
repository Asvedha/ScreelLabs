<template lang="pug">
.candidate-list
  ul.lists(v-if="jobs")
    li(v-for="job, i in jobs")
      span.title {{ job.job_title }}
      h4 Description: &nbsp;
        span.description {{ job.job_description }}
      h4 Requirements: &nbsp;  
        span.requirements {{ job.job_requirements }}
      h4 Salary  
        span.salary {{ job.job_salary }}  
      span.location {{ job.job_location }} | &nbsp;
      span.timing {{ job.job_timings }}
      button.btn Apply
</template>
<script>
import { mapGetters } from 'vuex'
export default {
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
.candidate-list
  ul.lists
    li
      width: 95%
      border-radius: 5px
      border: 0.5px solid grey
      list-style-type: none
      background: #ffffff
      padding: 20px
      // margin-left: 0px
      margin: 20px
    .title
      font-weight: bold
      font-size: 20px
    button
      float: right
</style>
