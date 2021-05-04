<template>
 <div>
    <img alt="Vue logo" class="logo" src="./assets/lawn-ui-logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <l-popup></l-popup>
 </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default{
  components:{
    HelloWorld
  },
  created(){
    console.log(this)
  }
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
  width: 200px;
}
</style>
