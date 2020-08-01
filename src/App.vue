<template>
  <div id="app">
    <!-- <transition
        enter-active-class="animated fadeInDown delay-2s"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
    <router-view name="nav"></router-view>
    </transition>-->
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
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Nav from "@/components/Nav.vue";
//import Sidebar from "@/components/Sidebar.vue";
// import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    // Nav,
    //Sidebar,
    // Footer
  },
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
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */

  /* background-color: #f2f2f2; */
  /* font-family: serif; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #495057;
}
</style>
