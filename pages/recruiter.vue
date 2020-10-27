<template lang="pug">
.recruiter
  AppHeader(:title="'Jobs Listing'")
    .actions(slot="actions") 
      button.btn(@click="CreateJob()") + Add Job
      nuxt-link.btn(to="/") Logout
  section    
    .container
      .content
        main    
          RecruiterJobList(@select="SelectJob", @delete="deleteJob")
          JobForm(v-if="clonedJob && jobAction === 'edit'", :job="clonedJob", @submit="SaveJob", @cancel="deSelectJob")
</template>
<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import RecruiterJobList from '~/components/RecruiterJobList'
import AppHeader from '~/components/AppHeader'
import JobForm from '~/components/JobForm'

const newJob = {
  job_title: '',
  job_description: '',
  job_requirements: '',
  job_location: '',
  job_timings: '',
  job_salary: null,
}
export default {
  components: {
    JobForm,
    AppHeader,
    RecruiterJobList,
    // ToastNotification,
  },
  data() {
    return {
      clonedJob: null,
    }
  },
  computed: {
    ...mapGetters({
      jobs: 'jobs/jobs',
      job: 'jobs/job',
      jobAction: 'jobs/jobAction',
    }),
  },
  watch: {
    job() {
      this.clonedJob = _.clone(this.job)
    },
  },
  mounted() {
    this.$store.dispatch('jobs/getJobs')
  },
  methods: {
    CreateJob() {
      this.SelectJob(_.clone(newJob), 'edit')
    },
    SelectJob(job, jobAction) {
      this.$store.dispatch('jobs/setJob', job)
      this.$store.dispatch('jobs/setJobAction', jobAction)
      // if (job && jobAction === 'delete') {
      //   this.deleteJob(job)
      // }
    },
    deSelectJob(job, jobAction) {
      this.clonedJob = null
      this.$store.dispatch('jobs/setJob', null)
      this.$store.dispatch('jobs/setJobAction', null)
    },
    SaveJob(job) {
      if (this.clonedJob.id) {
        console.log(job)
        this.$store
          .dispatch('jobs/putJob', {
            id: job.id,
            job: {
              job_title: job.job_title,
              job_description: job.job_description,
              job_requirements: job.job_requirements,
              job_timings: job.job_timings,
              job_location: job.job_location,
              job_salary: parseInt(job.job_salary),
            },
          })
          .then(() => {
            this.deSelectJob()
          })
      } else {
        this.$store.dispatch('jobs/postJob', job).then(() => {
          this.deSelectJob()
        })
      }
    },
    deleteJob(job) {
      this.$store.dispatch('jobs/deleteJob', job).then(() => {
        this.deSelectJob()
      })
    },
  },
}
</script>
<style lang="sass" scoped></style>
