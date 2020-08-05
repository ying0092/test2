<template>
  <div class="article">
    <foo class="content"/>
  </div>
</template>

<script>
import Foo from "@/articles/test1.md";
export default {
  name: "Article",
  data() {
    return {};
  },
  components: { Foo }
};
</script>

<style lang="scss" scoped>
.article {
  // background-image: url("../assets/about-bg.jpg");
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

.article .content {
  max-width: 760px;
}

</style>