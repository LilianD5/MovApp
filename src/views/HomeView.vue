<template>
<HeaderComponent></HeaderComponent>
<div class="d-flex">
  <div class="col-2 position-sticky top-0 d-none" id="menu-burger">
    <MenuBurger></MenuBurger>
  </div>
  <div>
    <h1 class="text-center" id="page-title">{{ pageTitle }}</h1>
    <div class="d-flex justify-content-center my-5">
      <p class="m-0 px-4 switch-titles fs-4">Movies</p>
      <div v-on:click="toggleSwitch(), movies(paging.page, genre, language, state)" class="bg-primary rounded-5 cursor-pointer d-flex justify-content-start switch" id="switch">
        <div class="bg-white rounded-5 switch-circle"></div>
      </div>
      <p class="m-0 px-4 switch-titles fs-4">Series</p>
    </div>
    <div v-if="state === true" class="d-flex flex-wrap col-10 mx-auto">
      <MoviesList v-for="item in moviesData" :key="item.id" :id="item.id" :title="item.title" :overview="item.overview" :img="item.poster_path"></MoviesList>
    </div>
    <div v-if="state === false" class="d-flex flex-wrap col-10 mx-auto">
      <SeriesList v-for="item in moviesData" :key="item.id" :id="item.id" :title="item.title" :overview="item.overview" :img="item.poster_path"></SeriesList>
    </div>
  </div>
</div>
<nav>
  <ul class="pagination justify-content-center" :paging="paging" :previous="previous" :next="next" :getPage="getPage">
      <li class="page-item col-1 text-center" @click="previous" v-on:click="movies(paging.page, genre, language, state)" :disabled="paging.page === 1">
        <button class="page-link col-12" aria-label="Previous">
          <slot name="previous-page">&laquo; &nbsp; Previous Page</slot>
        </button>
      </li>
      <li class="page-item text-center col-1">
        <p class="page-link">Page N°{{ paging.page }} </p>
      </li>
      <li class="page-item col-1 text-center" @click="next" v-on:click="movies(paging.page, genre, language, state)">
        <button class="page-link col-12" aria-label="Previous">
          <slot name="next-page">Next Page &nbsp; &raquo;</slot>
        </button>
      </li>
    </ul>
</nav>
</template>

<script>
import MenuBurger from '@/components/MenuBurger.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import ApiService from '@/services/api.service.js'
import MoviesList from '../components/MoviesList.vue'
import SeriesList from '../components/SeriesList.vue'

const apiService = new ApiService()

export default {
  name: 'HomeView',
  props: {},
  components: {
    MenuBurger,
    HeaderComponent,
    MoviesList,
    SeriesList
  },
  data () {
    return {
      paging: {
        page: 1
      },
      genre: this.$route.params.genre,
      language: this.$route.params.language,
      movieId: this.$route.params.movie,
      moviesData: null,
      movieData: null,
      pageTitle: 'Welcome to MovApp',
      state: true
    }
  },
  mounted () {
    this.movies(this.paging.page, this.genre, this.language, this.state)
    this.getPageTitle(this.genre, this.language)
  },
  methods: {
    async movies (page, genre, language, state) {
      if (state === true) {
        if (language !== undefined) {
          genre = ''
          const res = await apiService.getMovies(page, genre, language)
          const movies = await res.json()
          this.moviesData = movies.results
        } else if (genre !== undefined) {
          language = ''
          const res = await apiService.getMovies(page, genre, language)
          const movies = await res.json()
          this.moviesData = movies.results
        } else {
          genre = ''
          language = ''
          const res = await apiService.getMovies(page, genre, language)
          const movies = await res.json()
          this.moviesData = movies.results
        }
      } else if (state === false) {
        if (language !== undefined) {
          genre = ''
          const res = await apiService.getSerie(page, genre, language)
          const movies = await res.json()
          this.moviesData = movies.results
        } else if (genre !== undefined) {
          language = ''
          const res = await apiService.getSeries(page, genre, language)
          const movies = await res.json()
          this.moviesData = movies.results
        } else {
          genre = ''
          language = ''
          const res = await apiService.getSeries(page, genre, language)
          const movies = await res.json()
          this.moviesData = movies.results
          // console.log(movies.results)
        }
      }
    },
    async getPageTitle (genre, language) {
      if (genre !== undefined) {
        const res = await apiService.getGenres(genre)
        const genres = await res.json()
        // console.log(genres)
        for (const genre of genres.genres) {
          if (genre.id.toString() === this.genre) {
            this.pageTitle = genre.name
          }
        }
      } else if (language !== undefined) {
        const res = await apiService.getLanguages(language)
        const languages = await res.json()
        // console.log(languages)
        for (const language of languages) {
          console.log(language.iso_639_1)
          if (language.iso_639_1 === this.language) {
            this.pageTitle = language.name
          }
        }
      }
    },
    previous () {
      this.getPage(this.paging.page - 1)
    },
    next () {
      this.getPage(this.paging.page + 1)
    },
    getPage (pageNumber) {
      if (pageNumber < 1) {
        this.paging.page = 1
      } else if (pageNumber > this.paging.totalPages) {
        this.paging.page = this.paging.totalPages
      } else {
        this.paging.page = pageNumber
      }
    },
    toggleSwitch () {
      if (this.state === true) {
        this.state = false
        this.paging.page = 1
        // console.log(this.state)
      } else if (this.state === false) {
        this.state = true
        this.paging.page = 1
        // console.log(this.state)
      }

      const btnSwitch = document.querySelector('#switch')
      btnSwitch.classList.toggle('justify-content-end')
      btnSwitch.classList.toggle('bg-danger')
      // console.log(btnSwitch)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
