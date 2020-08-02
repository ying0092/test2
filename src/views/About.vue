<template>
  <div class="about d-flex justify-content-center pb-5">
    <Nav />
    <div class="p-3 content">
      <!-- 關於 -->
      <div>
        <h4 class="section-title section-title-center mb-4">
          <b></b>
          <span class="section-title-main">關於</span>
          <b></b>
        </h4>
        <div class="title-1">
          <p class="p-5">
            我們提供專業衝浪訓練
            <span>,</span>
            <span class="d-block d-sm-none">
              <br />
            </span>
            歡迎每一位想深入學習的衝浪的人
          </p>
        </div>
        <div class="p-3">
          <h5>初衷</h5>
          <p class="title-2">
            LEARNING AND GROWING, JUST LIKE A TREE
            <br />學衝浪沒有捷徑，像種樹一樣，慢慢且扎實的
          </p>
          <p class="text">
            愛衝浪，不僅是喜歡從事這項運動，更深深為這樣的生活方式著迷。
            <br />台灣的衝浪文化發展了近半個世紀，想接觸到衝浪其實很容易，
            SURFTREE 提供的不只是一次性的體驗，想要帶你深刻探索衝浪世界。
            希望你不僅是衝過浪，還要愛上衝浪，成為彼此的夥伴，在衝浪世界裡茁壯。
            <br />一起
            <b>衝浪去！</b>
          </p>
        </div>
      </div>
      <!-- team -->
      <div class="p-3 team">
        <h5>團隊成員</h5>
        <div class="row p-2">
          <div class="col-sm-4">
            <img class="team-img" :src="require('../assets/ba.jpg')" alt />
          </div>
          <div class="col-sm-8">
            <div class="p-2">
              <h6>小八/ 衝浪教練</h6>
              <p>
                接觸衝浪約12年，長短板都玩，非常具有天份的選手
                (自己說
                <font-awesome-icon class="mx-1" :icon="['far', 'grin-squint']" />
                <font-awesome-icon class="mx-1" :icon="['far', 'grin-squint-tears']" />
                <font-awesome-icon class="mx-1" :icon="['far', 'grin-beam-sweat']" />)
                <br />熱愛教學，熟知學習衝浪的各個環節，對每個階段的學員都能認真細心的傳達她對衝浪的想法。
              </p>
              <ul>
                <li>
                  ISA SURF COACH Lv1
                  <br />國際衝浪指導教練
                </li>
                <li>
                  ILS(International Life Saving Federation)
                  <br />國際救生員證
                </li>
                <li>
                  Emergency Medical Technician II
                  <br />中級緊急救護員
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row p-2">
          <div class="col-sm-4">
            <img class="team-img" :src="require('../assets/ying.jpg')" alt />
          </div>
          <div class="col-sm-8">
            <div class="p-2">
              <h6>陳穎/ CEO</h6>接觸衝浪約4年，包辦 SURFTREE 衝浪教學以外的大小事。雖然不教學，但也熱愛衝浪。努力練習中！快來成為我的衝浪夥伴
              <font-awesome-icon :icon="['far', 'smile-wink']" />
            </div>
          </div>
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
.about {
  // background-image: url("../assets/about-bg.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  overflow-y: scroll;
  // margin-top: -105px;
  // padding-top: 105px;
}
// @media screen and (max-width: 480px) {
//   .about {
//     margin-top: unset;
//     z-index: 1;
//   }
// }

.about .content {
  max-width: 760px;
}

.title-1 {
  border-radius: 15px;
  background-color: rgba(95, 123, 143, 0.32);
  line-height: 0.8;
}
p.title-2 {
  letter-spacing: 0.03rem;
  font-size: 0.9rem;
}
@media screen and (max-width: 480px) {
  p.title-2 {
    font-size: 0.8rem;
  }
  p.text {
    font-size: 0.9rem;
  }
}

.section-title {
  position: relative;
  -js-display: flex;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
}

.section-title b {
  display: block;
  -ms-flex: 1;
  flex: 1;
  height: 2px;
  opacity: 0.1;
  background-color: currentColor;
}

.section-title-center span {
  font-family: serif;
  margin: 0 15px;
}

// .team {
//   border-radius: 15px;
//   background-color: rgba(245, 249, 253, 0.61);
// }

.team-img {
  width: 100%;
  margin: 1rem auto;
  display: block;
  border-radius: 15px;
}
@media screen and (max-width: 480px) {
  .team-img {
    width: 85%;
  }
}
</style>