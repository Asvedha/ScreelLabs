<template lang="pug">
  header
    h3(v-if="title") {{ title }}
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
}
</script>
<style lang="sass">
header
  top: 0px
  width: 100vw
  h3
    // font-style: italic
    text-align: center
    padding: 20px
    background-color: #999999
</style>
