<template>
  <div class="blog d-flex justify-content-center pb-5">
    <div class="p-3 content">
      <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
        <h2 class="center">{{section}}</h2>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="$router.push({name: entry.id})">
              {{entry.title}}
              <span class="subtitle">{{entry.date}}</span>
            </h3>
            <p>{{entry.description}}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from '@/statics/data/blogs.json'
export default {
  name: "About",
  components: {
  },
  computed: {
    entries() {
      return BLOGENTRIES
    }
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