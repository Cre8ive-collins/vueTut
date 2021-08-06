<template>
  <div v-if="thread">
    {{ thread.title }}
    <div v-for="postId in thread.posts" :key="postId">
      <p>{{ postById(postId).text }}</p>
      <p>{{ userById(postById(postId).userId).name }}</p>
    </div>
  </div>
    <div v-else>
      <page-not-found></page-not-found>
    </div>
</template>

<script>
import pageNotFound from './pageNotFound.vue'
import sourcedata from '../data.json'
export default {
  components: {
    pageNotFound
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  name: 'pageThreads',
  data () {
    return {
      threads: sourcedata.threads,
      posts: sourcedata.posts,
      users: sourcedata.users
    }
  },
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id)
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
