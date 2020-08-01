<template>
  <div id="app">
    <router-view name="nav"></router-view>

    <div class="content">
      <!-- <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <router-view :style="{ minHeight: windowHeight+'px'}"/>
      </transition>-->
      <router-view :style="{ minHeight: (windowHeight)+'px'}" />
    </div>

    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      windowHeight: window.innerHeight
    };
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        that.windowHeight = window.innerHeight;
      })();
    };
  },
  watch: {
    windowHeight(val) {
      this.windowHeight = val;
    }
  }
};
</script>

<style>
a:hover {
  text-decoration: none !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #495057;
}
</style>
