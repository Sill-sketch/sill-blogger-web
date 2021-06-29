<template>
  <div id="app">
    <i-layout>
      <i-affix>
        <!-- 固定头部 -->
        <i-header class="app-header">
          <div class="app-logo" @click="$router.push('/')">kanoko.top</div>
        </i-header>
      </i-affix>

      <i-content class="app-content">
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

<style scoped>

/* app */

#app {
  font-family: "Courier New";
}

#app >>> .app-header {
  z-index: 999;
  height: 54px;
  line-height: 50px;
}

#app >>> .app-content {
  margin-top: 45px;
  min-height: 1075px;
  overflow-x: hidden;
}

#app >>> .app-footer {
  height: 245px;
  background-color: #515A6E;
}

#app >>> .app-logo {
  color: white;
  font-size: 22px;
  cursor: pointer;
}
</style>
