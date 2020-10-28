<template lang="pug">
  .job-list(v-if="jobs")
    ul.header
      li.title Tittle
      li.desc Description
      li.req Requirements
      li.location Location
      li.time Timings
      li.sal salary
      li.actions Actions
    ul.list(v-if="jobs.length > 0")
      li(v-for="j, i in jobs", :key="j.id")
        span.title
          strong {{ j.job_title }}
        span.desc(v-if="j.job_description", :title="j.job_description") {{ j.job_description }}
        span.desc(v-else) Not mentioned
        span.req(v-if="j.job_requirements", :title="j.job_requirements") {{ j.job_requirements }}
        span.req(v-else) Not mentioned
        span.location(v-if="j.job_location") {{ j.job_location }}
        span.location(v-else) Not mentioned
        span.time(v-if="j.job_timings") {{ j.job_timings }}
        span.time(v-else) Not mentioned
        span.sal(v-if="j.job_salary") &#x20B9; {{ j.job_salary }}
        span.sal(v-else) Not mentioned
        span.actions
          nav(:ref="`action${j.id}`")
            i(class="fas fa-edit", @click="$emit('select', j, 'edit' )", :title="'Update Job'") &nbsp;&nbsp; |  &nbsp;&nbsp;
            i(class="fas fa-trash-alt", @click="$emit('delete', j)", :title="'Delete Job'")
    ul.list(v-else)
      li
        span.title No Jobs found!
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
      border-bottom: 2px solid rgba(#999999, 0.2)
      &:hover
        background-color: rgba($neutral, 0.1)
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
      width: 15rem
      padding: $s/2
    .title, .desc, .req, .location
      // white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
    .desc, .req, .location,
      width: 18rem
      padding: $s/2
    .sal, .time,
      width: 8rem
      padding: $s/2
    .actions
      justify-content: flex-end
      width: 8rem
      padding: $s/2
      margin: 10px
</style>
