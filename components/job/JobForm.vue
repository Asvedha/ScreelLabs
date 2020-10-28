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
        textarea(v-model="jobData.job_description", maxLength=128)
        .error(v-if="maxlengthDesc") 
          | max length reached
      .req
        label Job Requirement
        textarea(v-model="jobData.job_requirements", maxLength=128)
        .error(v-if="maxlengthReq") 
          | max length reached
    .right    
      .loc
        label Location
        textarea(type="text", v-model="jobData.job_location", maxLength=128)
        .error(v-if="maxlengthLoc") 
          | max length reached
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
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { maxLength } from 'vuelidate/lib/validators'

Vue.use(Vuelidate)
export default {
  props: {
    job: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      jobData: {
        job_title: '',
        job_description: '',
        job_requirements: '',
        job_location: '',
        job_salary: null,
        job_timings: '',
      },
      maxlength: 128,
    }
  },
  validations: {
    jobData: {
      description: {
        maxLength: maxLength(128),
      },
      requirements: {
        maxLength: maxLength(128),
      },
      location: {
        maxLength: maxLength(128),
      },
    },
  },
  computed: {
    maxlengthDesc() {
      if (this.jobData.job_description.length === this.maxlength) {
        return true
      } else return false
    },
    maxlengthLoc() {
      if (this.jobData.job_location.length === this.maxlength) {
        return true
      } else return false
    },
    maxlengthReq() {
      if (this.jobData.job_requirements.length === this.maxlength) {
        return true
      } else return false
    },
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
