<template>
  <div class="container">
    <threadList :threads="threads"/>
  </div>
</template>

<script>
import threadList from './pageThreadList.vue'
import sourcedata from '../data.json'
export default {
  components: {
    threadList
  },
  data () {
    return {
      threads: sourcedata.threads
    }
  }
}
</script>

<style scoped>

</style>
