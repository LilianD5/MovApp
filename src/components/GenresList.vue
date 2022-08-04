<template>
  <li class="list-group-item bg-light">
    <router-link :to="{ name: 'genre', params: {genre: id} }" class="text-decoration-none text-dark">
    <p class="m-0">{{ name }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'GenresList',
  props: ['id', 'name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
