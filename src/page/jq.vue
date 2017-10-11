<template>
  <div class="test">
    <p>这是初始文字</p>
    <button @click="testJQ">看看jquery有没有正常工作</button>
  </div>
</template>
<script>
  export default {
    methods: {
      testJQ () {
        $('.test p').html('jquery 工作正常！')
      }
    }
  }
</script>
