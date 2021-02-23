<template>
  <div id="app">
    <i-layout>
      <i-affix>
        <i-header class="app-header">
          <span class="app-logo" @click="$router.push('/')">Sill-Blogger</span>
        </i-header>
      </i-affix>

      <i-content>
        <router-view />

        <br><br>
      </i-content>

      <i-footer class="app-footer">
        <div />
      </i-footer>
    </i-layout>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app { } */

.app-header {
  z-index: 999;
  width: 100%;
  height: 50px;
  line-height: 50px;
}

.app-logo {
  color: white;
  font-size: 21px;
  cursor: pointer;
}

.app-footer {
  height: 225px;
  background-color: #515A6E;
}
</style>
