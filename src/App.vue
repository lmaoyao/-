<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <myTab></myTab>
  </div>
</template>
<script>
import myTab from '@/components/Tab';

  export default {
      components:{
        myTab
      }
  }
</script>
<style lang="less">
*{margin:0;padding:0;list-style: none;}
a{text-decoration: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
} 
  
</style>
