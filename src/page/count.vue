<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{count}}</h3>
    <h3>{{localComputed}}</h3>
    <div>
      <button @click="add">+</button>
      <button @click="decrement">-</button>
    </div>
    <div>
      <input type="text" v-model="incrementValue"/>
      <button @click="incrementWithValue">increment</button>
    </div>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import {mapState, mapActions} from 'vuex'
  export default {
    data () {
      return {
        msg: 'Hello Vuex'
      }
    },
    store,
    computed: {
      localComputed () {
        return this.count + 10
      },
      ...mapState({
        count: 'count'
      })
    },
    methods: {
      ...mapActions(['decrement']),
      ...mapActions({
        add: 'increment'
      }),
      incrementWithValue () {
        this.$store.dispatch('incrementWithValue', this.incrementValue)
      }
    }
  }
</script>
