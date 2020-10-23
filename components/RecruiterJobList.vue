<template lang="pug">
  .job-list
    ul.header
      li.title Tittle
      li.desc Description
      li.req Requirements
      li.location Location
      li.time Timings
      li.sal salary
      li.actions Actions
    ul.list(v-if="jobs")
      li(v-for="j, i in jobs", :key="j.id")
        span.title
          strong {{ j.job_title }}
        span.desc {{ j.job_description }}
        span.req {{ j.job_requirements }}
        span.location {{ j.job_location }}
        span.time {{ j.job_timings }}
        span.sal {{ j.job_salary }}
        span.actions
          nav(:ref="`action${j.id}`")
            i(class="fas fa-edit")   | &nbsp;
            i(class="fas fa-trash-alt")
    ul.list(v-else)
      li
        span.name No Jobs found!
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
.job-list
  cursor: pointer
  ul.list
    li
      @include stack-l
    &:hover
      background-color: rgba($neutral, 0.1)
    border-bottom: 2px solid rgba(#999999, 0.2)
  ul.header
    border-bottom: 1px solid rgba($neutral, 0.2)
    @include stack-l
    background: rgba($neutral, 0.5)
    margin: 0
    li
      font-weight: bold
      border: none
  ul.list, ul.header
    .title
      width: 20rem
      padding: $s
    .desc, .req, .location
      width: 20rem
      overflow: hidden
      text-overflow: ellipsis
    .timing
      width: 20rem
      padding: 0.5rem
    .sal, .actions
      width: 10rem
      padding: $s/2
</style>
