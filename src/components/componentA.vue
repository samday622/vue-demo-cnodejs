<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msgfromfather }}</h1>
    <button @click="onClickMe">open mouse!</button>
  </div>
</template>

<script>
  export default{
    data: function () {
      return {
        msg: 'hello from component a!'
      }
    },
    props: ['msgfromfather'],
    methods: {
      onClickMe: function () {
        console.log(this.msgfromfather)
        this.$emit('child-tell-me-something', this.msg)
      }
    }
  }
</script>
<style lang="scss" scope>
  h1{
    color: #42b983;
  }
</style>
