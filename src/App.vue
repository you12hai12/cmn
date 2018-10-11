<template>
  <div id="app">
    <ul>
     <router-link to="/index" tag="li"><a href="/index">首页</a></router-link>
     <router-link to="/you" tag="li"><a href="/you">欢迎</a></router-link>
     <router-link to="/hai" tag="li"><a href="/hai">表格</a></router-link>
     <router-link to="/dong" tag="li"><a href="/dong">布局</a></router-link>
     <router-link to="/tree" tag="li"><a href="/tree">树</a></router-link>
     <router-link to="/jqueryUI" tag="li"><a href="/jqueryUI">手风琴</a></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
