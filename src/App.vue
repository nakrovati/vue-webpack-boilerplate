<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
div {
  background-color: white;
}
</style>
