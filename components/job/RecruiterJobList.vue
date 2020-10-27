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
        span.desc(:title="j.job_description") {{ j.job_description }}
        span.req(:title="j.job_requirements") {{ j.job_requirements }}
        span.location {{ j.job_location }}
        span.time {{ j.job_timings }}
        span.sal(v-if="j.job_salary") {{ j.job_salary }}
        span.sal(v-else) Not mentioned
        span.actions
          nav(:ref="`action${j.id}`")
            i(class="fas fa-edit", @click="$emit('select', j, 'edit' )") &nbsp;&nbsp; |  &nbsp;&nbsp;
            i(class="fas fa-trash-alt", @click="$emit('delete', j)")
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
      padding: $s
    .title, .desc, .req
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
    .desc, .req,
      width: 20rem
      padding: $s
    .location, .sal, .time
      width: 10rem
      padding: $s/2
    .actions
      // justify-content: flex-end
      width: 8rem
      padding: $s/2
      // margin: 3px
      // visibility: hidden
      // z-index: 2
    // .title
    //   width: 15rem
    //   padding: $s
    //   overflow: hidden
    //   text-overflow: ellipsis
    // .desc, .req,
    //   width: 18rem
    //   padding: $s
    //   white-space: nowrap
    //   overflow: hidden
    //   text-overflow: ellipsis
    // .location, .time, .salary
    //   width: 15rem
    //   padding: $s
    // .actions
    //   width: 10rem
    //   padding: $s/2
</style>
