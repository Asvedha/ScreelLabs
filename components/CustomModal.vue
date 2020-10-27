<template lang="pug">
  .custom-modal(v-if="isOpen")
    .dialog(v-if="isOpen")
      a.close(@click.prevent="close()")
        i.fas.fa-window-close.fa-lg
      header
        slot(name="header")
      body
        slot
      footer
        slot(name="footer")
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    open() {
      this.isOpen = true
      // this.$emit('open')
    },
    close() {
      this.isOpen = false
      this.$emit('close')
    },
  },
}
</script>
<style lang="sass">
.custom-modal
  .dialog
    display: none
    @include fixed
    // z-index: 2000
    height: 40rem
    width: 45rem
    margin: auto
    padding: 0
    header
      background: $neutral
    footer
      background: $neutral
    a.close
      @include absolute-ne($s/4)
      display: inline-block
      height: 2rem
      width: 2rem
      padding: $s/2

  // dialog contents layout
  .dialog
    display: flex
    flex-direction: column
    align-items: stretch
    justify-content: spread
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)
    header
      @include border-bottom(1)
      padding: $s
    footer
      @include border-top(3)
      padding: $s/2
    body
      padding: $s
      flex: 1
      overflow: auto
</style>
