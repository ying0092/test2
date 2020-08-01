<template>
  <div id="footer">
    <div class="row">
      <div id="footer-menu" class="footer-menu-wrap">
        <ul
          id="menu-%e3%80%8a%ef%bc%bf%ef%bc%bf22%e3%80%8b%e7%b7%9a%e4%b8%8a%e8%a8%ad%e8%a8%88%e5%b1%95"
          class="footer-menu-inner"
        >
          <router-link
            class="menu-item"
            tag="li"
            v-for="item in items"
            :key="item.title"
            :to="{ path: item.link, hash: item.fragment }"
          >
            <a>{{ item.title }}</a>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="footer-contact d-flex">
        <div class="pr-2">Follow us</div>
        <div class="link">
          <a href="https://www.instagram.com/surf.tree/" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="footer-logo">
        <img :src="require('../assets/logo.svg')" alt />
      </div>
    </div>
    <div class="row">
      <div class="copyright">© 2020 SURFTREE. All Rights Reserved.</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowHeight: window.innerHeight,
      drawer: null,
      background: require("@/assets/footer.svg"),
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

<style>
#footer {
  background-color: rgba(0, 0, 0, 0.075);
  /* position: relative; */
  padding-bottom: 60px;
}
#footer-menu {
  padding-top: 20px;
  padding-left: 44px;
  padding-right: 20px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}
#footer .row {
  width: 360px;
  margin-left: auto;
  margin-right: auto;
}
#footer a {
  color: #1a1a1a !important;
}
#footer .copyright {
  line-height: 18px;
  padding: 0 20px 0 44px;
  font-size: 10px;
  letter-spacing: 0.6px;
}

.footer-contact {
  font-weight: 800;
  padding-left: 44px;
  margin-top: 20px;
}
.footer-logo {
  padding-left: 44px;
}
.footer-logo img {
  width: 160px;
}

.footer-menu-inner .menu-item a {
  font-size: 12px;
  letter-spacing: 1.2px;
}

@media screen and (min-width: 768px) {
  #footer .row {
    width: 1100px;
  }
  #footer-menu {
    margin: auto;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
  }
  .footer-menu-inner {
    display: flex;
  }
  .footer-menu-inner .menu-item {
    margin-right: 36px;
    line-height: 42px;
  }
  /* .footer-menu-inner .menu-item a {
    font-family: "Noto Serif", "notoserifcjktc";
  } */
  #footer .copyright {
    margin: auto;
    line-height: 24px;
    padding: 0 20px;
    font-weight: 400;
    font-size: 12px;
  }
  .footer-contact {
    margin: 20px auto 0 auto;
    padding: 0;
  }
  .footer-logo {
    margin: auto;
    padding: 0;
  }
  /* #footer .logo {
    padding: 0 22px;
    position: relative;
    top: 24px;
  } */
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.link {
  color: white;
  background: gray;
  width: 26px;
  height: 26px;
  border-radius: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
}
.link svg {
  color: white;
}
#desktop-footer-links {
  display: flex;
}
</style>