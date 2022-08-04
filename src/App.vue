<template>
  <router-view :key="$route.fullPath" />
</template>

<style>
#menu-burger-btn{
  padding: 8px 16px;
}
#movies-container{
  margin: 0 auto;
}
.movie-container{
  cursor: pointer;
}
.movie-container:hover{
  background-color: #f3f3f3;
}
#menu-burger{
  align-self: flex-start;
}
#img-movie{
  margin: 0 auto;
}
.cursor-pointer{
  cursor: pointer;
}
.switch{
  width: 100px;
  height: 40px;
}
.switch-circle{
  width: 30px;
  height: 30px;
  margin: 5px;
}
.switch-titles{
  line-height: 40px;
}
@import'~bootstrap/dist/css/bootstrap.css';
</style>
