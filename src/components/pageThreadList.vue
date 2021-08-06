<template>
 <div class="col-full">
   <h2 class="list-title"></h2>
   <div class="thread" v-for="thread in threads" :key="thread.id">
     <div>
       <p>
        <router-link :to="{name: 'pageThread', params: {id: thread.id}}">Title :  {{ thread.title }}  </router-link>
       </p>

       <p>
        <a href="#"> {{ userById(thread.userId).name }} </a> {{ thread.publishedAt }}
       </p>

       <img :src="userById(thread.userId).avatar" alt="">

     </div>
   </div>
 </div>
</template>

<script>
import sourcedata from '../data.json'
export default {
  props: {
    threads: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      posts: sourcedata.posts,
      users: sourcedata.users
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById (userId) {
      return this.users.find(p => p.id === userId)
    }
  }
}
</script>

<style scoped>

</style>
