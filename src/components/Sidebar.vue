<template>
  <div id="sidebar">
    <!-- logo -->
    <img class="logo" :src="require('../assets/web_logo.svg')" alt />
    <!-- menu -->
    <ul class="sidebar-menu">
      <router-link v-for="item in items" :key="item.title" tag="li" :to="item.link">
        <a>
          {{ item.title }}
          <span>{{ item.subtitle }}</span>
        </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      drawer: null,
      item: 1,
      items: [
        {
          title: "關於我們",
          subtitle: "",
          icon: "mdi-clock",
          link: "/about",
          divider: true
        },
        {
          title: "課程介紹",
          subtitle: "",
          icon: "mdi-account",
          link: "/courses",
          divider: true
        },
        {
          title: "衝浪生活",
          subtitle: "Blog",
          icon: "mdi-flag",
          link: "/blog",
          divider: false
        }
      ]
    };
  }
};
</script>

<style>
#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 230px;
  background-color: #e0dbdb70;
}
#sidebar .logo {
  margin-left: -45px;
  margin-top: -10px;
  width: 320px;
  filter: drop-shadow(3px 4px 2px #bfa48f);
}
.sidebar-menu {
  padding-left: 0;
  text-align: left;
  margin-top: 80px;
}
.sidebar-menu li {
  list-style: none;
  /* font-family: serif; */
}
.sidebar-menu li.router-link-exact-active a {
  border-bottom: 2px groove #c1a793;
}
.sidebar-menu li a {
  display: inline-block;
  font-size: 14px;
  font-weight: 450;
  color: #6e6055;
  padding-left: 83px;
  padding-bottom: 3px;
  margin-bottom: 34px;
}
</style>