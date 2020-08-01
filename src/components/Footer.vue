<template>
  <div id="footer">
    <!-- footer menu -->
    <div>
      <div class="footer-menu">
        <ul class="footer-menu-inner">
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
    <!-- follow us -->
    <div>
      <div class="footer-contact">
        <div class="text">Follow us</div>
        <div class="link">
          <a href="https://www.instagram.com/surf.tree/" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </div>
      </div>
    </div>
    <!-- logo -->
    <div>
      <div class="footer-logo">
        <img :src="require('../assets/logo.svg')" alt />
      </div>
    </div>
    <!-- copyright -->
    <div>
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
          title: "關於 SURFTREE",
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
#footer {
  background-color: rgba(0, 0, 0, 0.075);
  padding-bottom: 60px;
}

//menu
.footer-menu {
  padding: 20px 44px 0px 44px;
  justify-content: center;
}
.footer-menu a {
  color: #495057 !important;
}
.footer-menu-inner {
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #e5e5e5;
}
.footer-menu-inner .menu-item a {
  font-size: 14px;
  letter-spacing: 1.4px;
  font-weight: 500;
  line-height: 48px;
}
@media screen and (min-width: 768px) {
  .footer-menu {
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }
  .footer-menu-inner {
    display: flex;
  }
  .footer-menu-inner .menu-item {
    margin: 0 18px;
    line-height: 82px;
  }
  .footer-menu-inner .menu-item a {
    font-weight: 200;
  }
}

// contact
.footer-contact {
  display: flex;
  font-weight: 700;
  padding: 0 44px;
  margin-top: 20px;
  color: black;
}
.footer-contact .text {
  padding-right: 8px;
}
.footer-contact .link {
  color: white;
  background: black;
  width: 26px;
  height: 26px;
  border-radius: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
}
.footer-contact .link svg {
  color: white;
}
@media screen and (min-width: 768px) {
  .footer-contact {
    justify-content: center;
    padding: 0;
  }
}

// logo
.footer-logo {
  padding: 0 44px;
}
.footer-logo img {
  width: 160px;
}
@media screen and (min-width: 768px) {
  .footer-logo {
    text-align: center;
  }
}

// copyright
#footer .copyright {
  line-height: 18px;
  padding: 0 44px;
  font-size: 10px;
  letter-spacing: 0.6px;
}
@media screen and (min-width: 768px) {
  #footer .copyright {
    text-align: center;
    line-height: 24px;
    font-weight: 400;
    font-size: 12px;
  }
}
</style>