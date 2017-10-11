<template>
  <div>
    <myHeader></myHeader>
    <Uediter :value="ueditor.value" :config="ueditor.config" ref="ue"></Uediter>
    <input type="button" value="显示编辑器内容（从控制台查看）" @click="returnContent"/>
    <myFooter></myFooter>
  </div>
</template>
<script>
  import myHeader from '@/components/header.vue'
  import myFooter from '@/components/footer.vue'
  import Uediter from '@/components/ue.vue'
  export default {
    components: {myHeader, myFooter, Uediter},
    data () {
      return {
        id: this.$route.params.id,
        dat: {
          content: ''
        },
        ueditor: {
          value: '',
          config: {}
        }
      }
    },
    created () {
      this.getData()
    },
    methods: {
      returnContent () {
        this.dat.content = this.$refs.ue.getUEContent()
        console.log(this.dat.content)
      },
      getData () {
        this.$api.get('topic/' + this.id, null, r => {
          this.ueditor.value = r.data.content
        })
      }
    }
  }
</script>
