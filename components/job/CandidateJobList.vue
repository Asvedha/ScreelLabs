<template lang="pug">
.candidate-list(v-if="filteredList")
  ul.lists(v-if="filteredList.length > 0")
    li(v-for="job, i in filteredList")
      span.title {{ job.job_title }}
      h4 Description: &nbsp;
        span.description {{ job.job_description }}
        span(v-if="!job.job_description")  Not mentioned
      h4 Requirements: &nbsp;  
        span.requirements {{ job.job_requirements }}
        span(v-if="!job.job_requirements")  Not mentioned
      br  
      h3
        i(class="fas fa-coins") &nbsp;
        span salary: &nbsp;
        span.salary &#x20B9; {{ job.job_salary }}
        span(v-if="!job.job_salary")  Not mentioned
      br  
      span.location
        i(class="fas fa-map-marker-alt") &nbsp;
        span {{ job.job_location }} &nbsp;  
        span(v-if="!job.job_location") Not mentioned &nbsp;
      span.timing 
        i(class="fas fa-business-time") &nbsp;
        span {{ job.job_timings }}
         span(v-if="!job.job_timings") Not mentioned &nbsp;
      .actions  
        button.btn(@click="applyJob(job)") Apply
  ul.lists(v-else)
    li No Jobs Found !!  
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    filteredList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters({
      jobs: 'jobs/jobs',
    }),
  },
  mounted() {
    this.$store.dispatch('jobs/getJobs')
  },
  methods: {
    applyJob(job) {
      console.log(job)
      this.$store.dispatch('jobs/applyJob', job)
    },
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
      background: $neutral-light
      padding: 20px
      // margin-left: 0px
      margin: 20px
    .title
      font-weight: bold
      font-size: 20px
    .actions
      margin-top: -30px
      margin-right: 30px
</style>
