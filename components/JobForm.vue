<template lang="pug">
custom-modal(ref="jobModal", @close="$emit('cancel')")
  h3(slot="header") {{ jobData && jobData.job_title ? 'Edit Job' : 'New Job'}}
  .job-form(v-if="jobData")
    .left
      .title
        label Title (Role)
        input(type="text", v-model="jobData.job_title")
      .desc
        label Job Description
        textarea(v-model="jobData.job_description")
      .requirement
        label Job Requirement
        textarea(v-model="jobData.job_requirements")
    .right    
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
    button.btn(@click="SubmitJob", v-on:keyup.enter="SubmitJob") Save    
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
<style lang="sass" scoped>
.job-form
  @include flex
  align-items: stretch
  .left
    flex: 1
    @include border-right(2)
    padding: 0 $s*2 0 0
    margin-left: $s
  .right
    flex: 1
    margin-left: $s*2
</style>
