<template lang="pug">
  .page
    .form 
      .f
        label Enter User Mail  
        input(type="text", v-model="user", v-on:keyup.enter="checkUser()")
      br
      button.btn(@click="checkUser()") Login
    ToastNotification(v-if="message && message != ''", :success="success") {{ message }}  
</template>
<script>
export default {
  data() {
    return {
      user: '',
      message: '',
      success: null,
    }
  },
  methods: {
    checkUser() {
      console.log(this.user)
      if (this.user === 'recruiter@screel.in') {
        return this.$router.push('/recruiter')
      } else if (this.user === 'candidate@screel.in') {
        return this.$router.push('/candidate')
      } else {
        this.message = 'Login Failed !'
        this.success = false
        this.$router.push('/')
        setTimeout(() => {
          this.message = ''
        }, 2000)
      }
    },
  },
}
</script>
<style lang="sass" scoped>
.page
  flex: 1
  @include distribute
  align-items: flex-start
  padding-top: $s*6
  // margin: auto
  .form
    background-color: $neutral-light
    width: 30rem
    height: 20rem
    border: 2px solid grey
    padding-top: $s*4
    padding-left: $s*7.5
    overflow: hidden
    .f
      label
        color: black !important
      input
        border: 2px solid black !important
    button
      // padding-top: $s*4
      padding-left: $s*6
      padding-right: $s*5.7
</style>
