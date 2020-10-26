<template lang="pug">
custom-modal(ref="jobModal", @close="$emit('cancel')")
  h3(slot="header") New Job
  .form(v-if="jobData")
    .title
      label Title (Role)
      input(type="text", v-model="jobData.job_title")
    .desc
      label Job Description
      textarea(v-model="jobData.job_description")
    .requirement
      label Job Requirement
      textarea(v-model="jobData.job_requirements")
    .location  
      label Location
      input(type="text", v-model="jobData.job_location")
    .time 
      label Timings
      input(type="text", v-model="jobData.job_timings")
    .salary
      label Salary
      input(type="number", v-model.number="jobData.job_salary")  
  .actions(slot="footer") 
    button.btn(@click="SubmitJob") Save    
</template>
<script>
import CustomModal from '~/components/CustomModal'
export default {
  components: {
    CustomModal,
  },
  props: {
    job: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      jobData: null,
    }
  },
  watch: {
    jobData() {
      if (this.jobData) {
        this.$refs.jobModal.open()
      } else this.$refs.jobModal.close()
    },
  },
  mounted() {
    // console.log(this.job)
    this.jobData = this.job
  },
  methods: {
    SubmitJob() {
      console.log(this.jobData)
      this.$emit('submit', this.jobData)
    },
  },
}
</script>
