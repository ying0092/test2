<template>
  <div id="nav">
    <div class="d-flex">
      <!-- logo -->
      <div>
        <img class="logo" :src="require('../assets/web_logo.svg')" alt />
      </div>
      <!-- menu -->
      <div class="ml-auto menu">
        <router-link v-for="item in items" :key="item.title" :to="item.link">
          <a>
            {{ item.title }}
            <span>{{ item.subtitle }}</span>
          </a>
        </router-link>
      </div>
      <!-- drawer -->
      <span class="toggle p-3" @click="drawer=!drawer">Menu</span>
      <!-- <button class="toggle" @click="drawer=!drawer">Menu</button> -->
    </div>

    <transition
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight"
      mode="out-in"
    >
      <div id="drawer" v-if="drawer" @click="drawer=!drawer">
        <div>
          <img class="logo" :src="require('../assets/web_logo.svg')" alt />
        </div>
        <ul class="drawer-menu text-center mt-5">
          <router-link v-for="item in items" :key="item.title" tag="li" :to="item.link">
            <a>
              {{ item.title }}
              <span>{{ item.subtitle }}</span>
            </a>
          </router-link>
        </ul>
      </div>
    </transition>
    <div id="filter" v-if="drawer" @click="drawer=!drawer"></div>
  </div>
</template>

<script>
export default {
  name: "Nav",
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
@media only screen and (min-width: 768px) {
  .toggle {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  .menu {
    display: none;
  }
}

.toggle {
  position: fixed;
  top: 0;
  right: 0;
}

#nav {
  height: 120px;
  background-color: #e0dbdb70;
  margin-bottom: 100px;
}
#nav img.logo {
  width: 70vw;
  max-width: 300px;
  margin-top: -25px;
  margin-left: 5vw;
  filter: drop-shadow(3px 4px 2px #bfa48f);
}
#nav .menu {
  padding-top: 65px;
}
#nav .router-link-exact-active a {
  border-bottom: 2px solid #c1a793;
}
#nav a {
  display: inline-block;
  font-size: 14px;
  font-weight: 450;
  color: #6e6055;
  padding: 3px;
  margin-right: 17px;
}

#drawer {
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  position: fixed;
  top: 0;
  z-index: 100;
}
#filter {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
}

#drawer li {
  list-style: none;
}
#drawer li a {
  /* color: #ffffff; */
  margin-top: 50px;
  font-size: 1.2em;
}
</style>