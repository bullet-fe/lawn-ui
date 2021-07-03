<template>
  <div>
    <!-- <img alt="Vue logo" class="logo" src="./assets/lawn-ui-logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <ln-pull-refresh @refresh="onRefresh" v-model:isLoading="isLoading">
      <div v-for="players,i in 10" :key="i" class="list-item">
        {{ i }}
      </div>
    </ln-pull-refresh>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      players: ['kobe', 'fisher', 'jordan', 'shark', 'duncun'],
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      console.log('f')
      this.isLoading = true
      setTimeout(() => {
        for (let i = 0; i < 4; i++) {
          this.players.unshift(
            "player No." + Math.floor(Math.random() * 10) + 1
          );
        }
      
        this.isLoading = false
      }, 1000);
    },
  },
  mounted() {},
};
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
.logo {
  width: 200px;
}
.scroll-box {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
</style>
