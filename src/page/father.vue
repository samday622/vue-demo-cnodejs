<template>
  <div>
    <p>child tells me: {{ childWords }}</p>
    <component-a msgfromfather="you die!" v-on:child-tell-me-something="listenToMyBoy"></component-a>
  </div>
</template>
<script>
  import ComponentA from '@/components/componentA'
  export default {
    components: {ComponentA},
    data () {
      return {
        childWords: ''
      }
    },
    methods: {
      listenToMyBoy (msg) {
        this.childWords = msg
      }
    }
  }
</script>
