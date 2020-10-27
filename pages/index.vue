<template lang="pug">
.app
  AppHeader(:title="'Applicant Tracking System'")
  LoginForm
</template>
<script>
import LoginForm from '~/components/LoginForm'
export default {
  components: {
    LoginForm,
  },
}
</script>
<style lang="sass" scoped>
.app
  flex: 1
    padding: 0 $s
    margin-bottom: $s*3
    // overflow-y: auto
    // .content-header
    //   @include spread
    //   padding: $s/2
</style>
