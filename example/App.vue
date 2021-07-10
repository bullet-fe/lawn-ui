<template>
  <div>
    <img alt="Vue logo" class="logo" src="./assets/lawn-ui-logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <ln-picker
      v-model:visible="show"
      :list-data="listData"
      :defaultValueData="{value:'海北藏族自治区'}"
      title="城市选择"
      @confirm="confirm"
      @onChange="onChangeHandle"
    ></ln-picker>
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
      show: true,
      listData: [
        "南京市",
        "无锡市",
        "海北藏族自治区",
        "北京市",
        "连云港市",
        "浙江市",
        "江苏市",
      ],
    };
  },
  methods: {
    confirm(val) {
      console.log('val: ', val);
    },
    onChangeHandle(val){
        console.log(val)
    }
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
