<template lang="pug">
.app-header
  h3(v-if="title") {{ title }}
  .actions
    slot(name="actions")
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
.app-header
  top: 0px
  width: 100vw
  height: 70px
  background-color: #999999
  h3
    position: relative
    top: 20px
    text-align: center
  .actions
    margin-top: -5px
    margin-right: 30px
</style>
