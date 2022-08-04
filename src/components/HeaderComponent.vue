<template>
  <header class="position-sticky top-0" id="top">
    <div id="menu-burger-btn">
      <img v-on:click="showMenu" src="../assets/burger.png" alt="Icone ouverture de menu" width="30">
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    showMenu: function () {
      const burgerMenu = document.querySelector('#menu-burger')
      const header = document.querySelector('header')
      const pageTitle = document.querySelector('#page-title')
      burgerMenu.classList.remove('d-none')
      header.classList.add('d-none')
      pageTitle.style.paddingTop = '40.5px'
    }
  }
}
</script>
