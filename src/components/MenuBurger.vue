<template>
  <ul class="list-group list-group-flush bg-light overflow-auto vh-100">
    <li class="list-group-item bg-light">
        <img v-on:click="hideMenu" src="../assets/close.png" alt="Icone fermeture de menu" width="30">
    </li>
    <li class="list-group-item list-group-item bg-light p-0">
        <router-link to="/" class="text-decoration-none text-dark">
        <h4 class="cursor-pointer px-3 py-2 m-0">Home</h4>
        </router-link>
    </li>
    <li class="list-group-item list-group-item bg-light p-0">
        <h4 class="cursor-pointer px-3 py-2 m-0" v-on:click="toggleList('#allGenresContainer')">Genres</h4>
        <ul id="allGenresContainer" class="d-none ps-0">
          <GenresList v-for="item in genresData" :key="item.id" :id="item.id" :name="item.name"></GenresList>
        </ul>
    </li>
    <li class="list-group-item list-group-item bg-light p-0">
        <h4 class="cursor-pointer px-3 py-2 m-0" v-on:click="toggleList('#allCountriesContainer')">Original Languages</h4>
        <ul id="allCountriesContainer" class="d-none ps-0">
          <LanguagesList v-for="item in languagesData" :key="item.iso_639_1" :acronym="item.iso_639_1" :name="item.english_name"></LanguagesList>
        </ul>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src
import ApiService from '@/services/api.service.js'
import LanguagesList from './LanguagesList.vue'
import GenresList from './GenresList.vue'

const apiService = new ApiService()

export default {
  name: 'HomeView',
  components: {
    LanguagesList,
    GenresList
  },
  data () {
    return {
      languagesData: null,
      genresData: null
    }
  },
  mounted () {
    this.genresList()
    this.languagesList()
  },
  methods: {
    async genresList () {
      const res = await apiService.getGenres()
      const genres = await res.json()
      this.genresData = genres.genres
    //   console.log(genres.genres)
    },
    async languagesList () {
      const res = await apiService.getLanguages()
      const languages = await res.json()
      this.languagesData = languages
      // console.log(languages)
    },
    toggleList: function (ulId) {
      const componentTag = document.querySelector(ulId)
      componentTag.classList.toggle('d-block')
      componentTag.classList.toggle('d-none')
    },
    hideMenu: function () {
      const burgerMenu = document.querySelector('#menu-burger')
      const header = document.querySelector('header')
      const pageTitle = document.querySelector('#page-title')
      burgerMenu.classList.add('d-none')
      header.classList.remove('d-none')
      pageTitle.style.paddingTop = '0'
    }
  }
}
</script>
