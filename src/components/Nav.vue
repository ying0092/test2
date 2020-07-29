<template>
  <div id="nav">
    <!-- head bar -->
    <nav class="my-navbar sticky-top">
      <ul class="justify-content-center">
        <router-link
          tag="li"
          v-for="item in items"
          :key="item.title"
          :to="{ path: item.link, hash: item.fragment }"
        >
          <a>\\ {{ item.title }}</a>
          <!-- <img class="nav-bottom-line" :src="require('../assets/nav-bottom-line.svg')" alt /> -->
        </router-link>
      </ul>
    </nav>
    <!-- toggle menu -->
    <div class="toggle-menu"></div>
  </div>
</template>

<script>
export default {
  name: "Nav",
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
  },
  data() {
    return {
      windowHeight: window.innerHeight,
      drawer: null,
      item: 1,
      items: [
        {
          title: "關於我們",
          link: "about"
        },
        {
          title: "課程簡介",
          link: "courses"
        },
        {
          title: "課程方案",
          link: "plans"
        },
        {
          title: "ＢＬＯＧ",
          link: "blog"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// @media screen and (max-width: 480px) {
//   #nav {
//     position: fixed;
//     background-color: #ffffffe6;
//     z-index: 999;
//   }
// }

#nav {
  position: fixed;
  top: 1rem;
  padding-left: 2rem;
}

nav ul {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  margin-bottom: 0;
  list-style: none;
  padding-left: 0;
}

nav ul li {
  padding: 1rem 0.5rem;
}

nav ul li a {
  font-family: serif;
  color: #495057;
  writing-mode: vertical-lr;
  // font-weight: bolder;
  font-size: 1.2rem;
}

.nav-bottom-line {
  position: relative;
  top: -10px;
}
</style>