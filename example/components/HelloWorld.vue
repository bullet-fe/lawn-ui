<template>
<h1>{{msg}}</h1>
<h2>{{msg}}</h2>
<h3>{{msg}}</h3>
<h4>{{msg}}</h4>
<h5>{{msg}}</h5>
<h6>{{msg}}</h6>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
h1{
  color: var(--color-primary);;
}
h2{
  color: var(--color-info);;
}
h3{
  color: var(--color-success);;
}
h4{
  color: var(--color-warning);;
}
h5{
  color: var(--color-danger);;
}
h6{
  color: var(--color-disabled);;
}
</style>
