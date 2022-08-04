<template>
<HeaderComponent></HeaderComponent>
<div class="d-flex">
  <div class="col-2 position-sticky top-0 d-none" id="menu-burger">
    <MenuBurger></MenuBurger>
  </div>
  <div class="col-10 mx-auto">
      <h1 class="text-center pb-5" id="page-title">{{ movieData.title }}</h1>
      <div class="d-flex justify-content-around col-8 mx-auto">
        <img :src="'https://image.tmdb.org/t/p/w400/' + movieData.poster_path" alt="" class="d-block pe-5" id="img-movie">
        <div class="ps-5">
          <p class="fs-4">Overview:</p>
           <p class="fs-5">{{ movieData.overview }}</p>
          <p class="fs-4">Release Date: <span>{{ movieData.release_date }}</span></p>
          <p class="fs-4">Note: <span>{{ movieData.vote_average }}/10</span></p>
        </div>
      </div>
    </div>
</div>
<a href="/" class="text-decoration-none text-dark">
      <div class="btn btn-outline-dark d-block mx-auto col-1 mt-5"><p class="cursor-pointer px-3 py-2 m-0">Back</p></div>
</a>
</template>

<script>
import ApiService from '@/services/api.service.js'
import MenuBurger from '@/components/MenuBurger.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

const apiService = new ApiService()

export default {
  name: 'MovieView',
  props: {},
  components: {
    MenuBurger,
    HeaderComponent
  },
  data () {
    return {
      movieId: this.$route.params.movie,
      movieData: null,
      creditsData: null
    }
  },
  created () {
    this.movie(this.movieId)
  },
  methods: {
    async movie (movieId) {
      const res = await apiService.getMovie(movieId)
      const movie = await res.json()
      this.movieData = movie
      // console.log(movie)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
