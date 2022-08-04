<template>
  <li class="list-group-item bg-light">
    <router-link :to="{ name: 'language', params: {language: acronym} }" class="text-decoration-none text-dark">
    <p class="m-0">{{ name }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'LanguagesList',
  props: ['name', 'acronym']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
