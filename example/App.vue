<template>
 <div>
    <img alt="Vue logo" class="logo" src="./assets/lawn-ui-logo.png" @click="showPopupHandle" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <ln-popup v-model:show="showPopup" @clickPopup="clickPopup" :customStyle="{color:'red'}" customClass="12323" :luckScroll="true">
      弹窗内容
    </ln-popup>
    <ln-popup v-model:show="showPopup2"></ln-popup>
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
  },
  data() {
    return {
      showPopup: false,
      showPopup2: false
    }
  },
  methods:{
    showPopupHandle(){
      this.showPopup = true
    },
    clickPopup(){
      this.showPopup = false
    }
  }
}
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
