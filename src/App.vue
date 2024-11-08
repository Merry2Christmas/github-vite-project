<script setup lang="ts">
import { ref } from 'vue';
const aa = ref<string>('sadfasd')
</script>

<template>
  <div style="width: 100%;height: 100%;">
    <i class="iconfont icon-shujuqiequ" style="color:red"></i>
    <i class="iconfont icon-gongjidanchuang"></i>
    <el-input v-model="aa"></el-input>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
