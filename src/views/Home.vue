<template>
  <div class="demo text-center">
    <header id="header">
      <div class="content2">
        <div class="animated fadeInDown slow">
          <img class="logo" :src="require('../assets/logo.svg')" alt />
        </div>
        <div class="inner animated fadeInUp slow">
          <p>Learning and growing, just like a tree</p>
        </div>
      </div>
      <div class="animated fadeInDown delay-2s">
        <nav>
          <ul>
            <router-link
              tag="li"
              v-for="item in items"
              :key="item.title"
              :to="{ path: item.link, hash: item.fragment }"
            >
              <a>
                {{ item.title }}
                <span>{{ item.subtitle }}</span>
              </a>
            </router-link>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
// import Welcome from '@/components/Welcome.vue'

export default {
  name: "Home",
  components: {
    // Welcome
  },
  data() {
    return {
      items: [
        {
          title: "關於我們",
          link: "about"
        },
        {
          title: "課程簡介",
          link: "courses",
        },
        {
          title: "課程方案",
          link: "plans",
        },
        {
          title: "BLOG",
          link: "blog"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.demo {
  background-image: url("../assets/bg-n1.jpg");
  background-position: center;
  background-size: cover;
  padding-top: 9em;
}
@media screen and (max-width: 480px) {
  .demo {
    padding-top: 1em;
  }
}

.logo {
  width: 25%;
  min-width: 220px;
}

/* Header */

#header {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-align-items: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -moz-transition: -moz-transform 0.325s ease-in-out,
    -moz-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
  -webkit-transition: -webkit-transform 0.325s ease-in-out,
    -webkit-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
  -ms-transition: -ms-transform 0.325s ease-in-out,
    -ms-filter 0.325s ease-in-out, opacity 0.325s ease-in-out;
  transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out,
    opacity 0.325s ease-in-out;
  background-image: -moz-radial-gradient(
    rgba(255, 255, 255, 0.1) 25%,
    rgba(0, 0, 0, 0) 55%
  );
  background-image: -webkit-radial-gradient(
    rgba(255, 255, 255, 0.1) 25%,
    rgba(0, 0, 0, 0) 55%
  );
  background-image: -ms-radial-gradient(
    rgba(255, 255, 255, 0.1) 25%,
    rgba(0, 0, 0, 0) 55%
  );
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.1) 25%,
    rgba(0, 0, 0, 0) 55%
  );
  /* background-image: radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 55%); */
  max-width: 100%;
  text-align: center;
}

#header > * {
  -moz-transition: opacity 0.325s ease-in-out;
  -webkit-transition: opacity 0.325s ease-in-out;
  -ms-transition: opacity 0.325s ease-in-out;
  transition: opacity 0.325s ease-in-out;
  position: relative;
  // margin-top: 3.5rem;
}

// #header > *:before {
//   content: "";
//   display: block;
//   position: absolute;
//   top: calc(-3.5rem - 1px);
//   left: calc(50% - 1px);
//   width: 1px;
//   height: calc(3.5rem + 1px);
//   background: #eee;
// }

#header > :first-child {
  margin-top: 0;
}

#header > :first-child:before {
  display: none;
}

// #header .logo {
// 	width: 7rem;
// 	height: 7rem;
// 	line-height: 7rem;
// 	border: solid 1px #eee;
// 	border-radius: 100%;
// }

#header .logo .icon:before {
  font-size: 2rem;
}

#header .content2 {
  // border-style: solid;
  // border-color: #eee;
  /* border-top-width: 1px; */
  // border-bottom-width: 1px;
  max-width: 100%;
}

#header .content2 .inner {
  -moz-transition: max-height 0.75s ease, padding 0.75s ease,
    opacity 0.325s ease-in-out;
  -webkit-transition: max-height 0.75s ease, padding 0.75s ease,
    opacity 0.325s ease-in-out;
  -ms-transition: max-height 0.75s ease, padding 0.75s ease,
    opacity 0.325s ease-in-out;
  transition: max-height 0.75s ease, padding 0.75s ease,
    opacity 0.325s ease-in-out;
  -moz-transition-delay: 0.25s;
  -webkit-transition-delay: 0.25s;
  -ms-transition-delay: 0.25s;
  transition-delay: 0.25s;
  padding-bottom: 3rem;
  max-height: 40rem;
  overflow: hidden;
}

#header .content2 .inner > :last-child {
  margin-bottom: 0;
}

#header .content2 p {
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  font-size: 0.7rem;
  line-height: 2;
  font-family: serif;
}

#header nav ul {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  margin-bottom: 0;
  list-style: none;
  padding-left: 0;
  border: solid 1px #eee;
  border-radius: 4px;
  background-color: rgba(84, 100, 133, 0.61);
}

#header nav ul li {
  padding-left: 0;
  border-left: solid 1px #eee;
}

#header nav ul li:first-child {
  border-left: 0;
}

#header nav ul li a {
  display: block;
  min-width: 7rem;
  height: 2.75rem;
  line-height: 2.75rem;
  padding: 0 1.25rem 0 1.45rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.8rem;
  border-bottom: 0;
  color: #ffffff;
}

#header nav ul li a:hover {
  background-color: rgba(255, 255, 255, 0.075);
}

#header nav ul li a:active {
  background-color: rgba(255, 255, 255, 0.175);
}

#header nav.use-middle:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: calc(50% - 1px);
  width: 1px;
  height: 100%;
  background: #eee;
}

#header nav.use-middle ul li.is-middle {
  border-left: 0;
}

div#my-dropdown-menu {
  border: none;
  border-radius: unset;
  width: 100%;
  min-width: 7rem;
  padding: 0;
  margin: 0;
}

#my-dropdown-menu a:hover {
  background-color: #ffffff !important;
}

@media screen and (max-width: 480px) {
  div#my-dropdown-menu.show {
    display: contents;
  }
  div#my-dropdown-menu a {
    background-color: #eee;
  }
}

body.is-article-visible #header {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
  -moz-filter: blur(0.1rem);
  -webkit-filter: blur(0.1rem);
  -ms-filter: blur(0.1rem);
  filter: blur(0.1rem);
  opacity: 0;
}

body.is-preload #header {
  -moz-filter: blur(0.125rem);
  -webkit-filter: blur(0.125rem);
  -ms-filter: blur(0.125rem);
  filter: blur(0.125rem);
}

body.is-preload #header > * {
  opacity: 0;
}

body.is-preload #header .content2 .inner {
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
}

@media screen and (max-width: 980px) {
  #header .content2 p br {
    display: none;
  }
}

@media screen and (max-width: 736px) {
  #header > * {
    margin-top: 2rem;
  }

  #header > *:before {
    top: calc(-2rem - 1px);
    height: calc(2rem + 1px);
  }

  // #header .logo {
  //   width: 6rem;
  //   height: 6rem;
  //   line-height: 6rem;
  // }

  #header .logo .icon:before {
    font-size: 1.75rem;
  }

  #header .content2 .inner {
    padding: 2.5rem 1rem;
    /* padding-top: 0; */
  }

  #header .content2 p {
    line-height: 1.875;
  }
}

@media screen and (max-width: 480px) {
  #header {
    padding: 1.5rem 0;
  }

  #header .content2 .inner {
    padding-top: 0;
    padding-bottom: 2.5rem;
  }

  #header nav ul {
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 10rem;
    max-width: 100%;
  }

  #header nav ul li {
    border-left: 0;
    border-top: solid 1px #eee;
  }

  #header nav ul li:first-child {
    border-top: 0;
  }

  #header nav ul li a {
    height: 3rem;
    line-height: 3rem;
    min-width: 0;
    width: 100%;
  }

  #header nav.use-middle:after {
    display: none;
  }
}
</style>