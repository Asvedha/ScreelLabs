<template lang="pug">
.app
  AppHeader(:title="'Applicant Tracking System'")
  main
    Index
</template>
<script>
import AppHeader from '~/components/AppHeader'
import Index from '~/components/Index'
export default {
  components: {
    AppHeader,
    Index,
  },
}
</script>
<style lang="sass" scoped>
.app
  flex: 1
    padding: 0 $s
    margin-bottom: $s*3
    overflow-y: auto
    // .content-header
    //   @include spread
    //   padding: $s/2
</style>
