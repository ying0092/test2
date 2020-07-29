<template>
  <div id="footer">
    <div class="row d-flex">
      <div id="footer-menu" class="footer-menu-wrap mr-auto">
        <ul
          id="menu-%e3%80%8a%ef%bc%bf%ef%bc%bf22%e3%80%8b%e7%b7%9a%e4%b8%8a%e8%a8%ad%e8%a8%88%e5%b1%95"
          class="footer-menu-inner"
        >
          <li
            id="menu-item-265083"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-265083"
          >
            <a href="https://flipermag.com/about/">關於 SURFTREE</a>
          </li>
          <li
            id="menu-item-265084"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-265084"
          >
            <a href="https://flipermag.com/contact/">課程簡介</a>
          </li>
          <li
            id="menu-item-265085"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-265085"
          >
            <a href="https://flipermag.com/terms-of-service/">課程方案</a>
          </li>
          <li
            id="menu-item-265086"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-265086"
          >
            <a href="https://flipermag.com/privacy-policy/">ＢＬＯＧ</a>
          </li>
        </ul>
      </div>
        <div id="desktop-footer-links" class="px-3">
          <div>
            <div class="link">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </div>
          </div>
           <div class="logo">
        <img :src="require('../assets/logo.svg')" alt />
      </div>
        </div>
        <div id="mobile-footer-links">
          <a class="instagram iconset" href="https://www.instagram.com/fliper_mag/" target="_blank"></a>
          <a class="facebook iconset" href="https://www.facebook.com/flipermag" target="_blank"></a>
          <br />
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
      background: require("@/assets/footer.svg")
    };
  }
};
</script>

<style>
#footer {
  background-color: rgba(0, 0, 0, 0.075);
  /* position: relative; */
  margin-bottom: 60px;
}
#footer-menu {
  padding-top: 20px;
  padding-left: 44px;
  padding-right: 20px;
  border-top: 1px solid #e5e5e5;
}
#footer .row {
  width: 360px;
  margin-left: auto;
  margin-right: auto;
}
a {
  color: #1a1a1a !important;
}
#footer .copyright {
  line-height: 18px;
  padding: 0 20px 0 44px;
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.6px;
  color: #1a1a1a;
}
@media screen and (min-width: 1100px) {
  #footer .row {
    width: 1100px;
  }
  #footer-menu {
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
  .footer-menu-inner .menu-item a {
    font-size: 12px;
    letter-spacing: 1.2px;
    font-family: "Noto Serif", "notoserifcjktc";
  }
  #footer .copyright {
    line-height: 24px;
    padding: 0 20px;
    font-weight: 400;
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

.logo img {
  width: 160px;
}

.link {
  color: white;
  background: black;
  width: 26px;
  height: 26px;
  border: 1px solid;
  border-radius: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
}
#desktop-footer-links {
  display: flex;
}
</style>