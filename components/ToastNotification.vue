<template lang="pug">
.toast
  slot
</template>
<script></script>
<style lang="sass" scoped>
.toast
  @include fixed-bottom-right(2rem)
  color: #ffffff
  background-color: $neutral-dark
  bottom: 5rem
  max-width: 30rem
  text-align: center
  padding: $s/2 $s
  // z-index: 5
  border-radius: 3px
  animation-duration: 1s
  animation-fill-mode: both
  -webkit-animation-duration: 1s
  -webkit-animation-fill-mode: both
  animation: slideInUp .3s
</style>
