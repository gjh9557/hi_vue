<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
<router-link to="/main"></router-link>
    <router-link to="/login"></router-link>
    <router-view></router-view>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App'
}
</script>

