<template>
  <div class="movies col-12 col-sm-6 col-lg-4 pt-5 pb-5 movie-container">
    <router-link :to="{ name: 'movie', params: {movie: id} }" class="text-decoration-none text-dark">
      <h2 class="text-center fs-5">{{ title }}</h2>
      <img :src="'https://image.tmdb.org/t/p/w200/' + img" alt="" class="d-block" id="img-movie">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MoviesList',
  props: ['id', 'title', 'overview', 'img']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
