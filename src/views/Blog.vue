<template>
  <div class="blog d-flex justify-content-center pb-5">
    <Nav />
    <div class="p-3 content">
      <!-- new -->
      <div>
        <div class="article p-3">
          <p class="date text-muted">2020 Jun 30</p>
          <router-link to="article">
            <div class="my-3">
              <img :src="require('../assets/a1.jpg')" alt />
            </div>
          </router-link>
          <router-link to="article" class="article-title">
            <h5>PU 或 EPS 板哪個好？</h5>
          </router-link>
          <p>關於 Surfboard Blanks 的小歷史...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Nav from "@/components/Nav.vue";

export default {
  name: "About",
  components: {
    //Nav,
  }
};
</script>

<style lang="scss" scoped>
.blog {
  // background-image: url("../assets/blog-bg.jpg");
  background-color: #f8f9fa94;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  overflow-y: scroll;
  padding-top: 30px;
  // margin-top: -105px;
  // padding-top: 105px;
}
// @media screen and (max-width: 480px) {
//   .blog {
//     margin-top: unset;
//     z-index: 1;
//   }
// }

.blog .content {
  max-width: 760px;
}

.article {
  border-radius: 5px;
  background-color: #f8f9fade;
  box-shadow: 0 1px 4px rgba(230, 230, 230, 1);
}

.article img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  // overflow:hidden;
}

.date {
  font-family: serif;
}

.tag {
  border: 1px solid;
  padding: 0.2rem 1rem;
  border-radius: 15px;
}

.article-title {
  color: black;
}
</style>