<template lang="pug">
  .page
    .form
      label Enter UserName / UserMail  
      input(type="text", v-model="user")
    button.btn(@click="checkUser()") Login  
</template>
<script>
export default {
  data() {
    return {
      user: '',
    }
  },
  methods: {
    checkUser() {
      if (this.user === 'recruiter@screel.in') {
        return this.$router.push('/recruiter')
      } else if (this.user === 'candidate@screel.in') {
        return this.$router.push('/candidate')
      } else {
        this.$router.push('/')
      }
    },
  },
}
</script>
<style lang="sass" scoped>
.page
  @include border(2)
</style>
