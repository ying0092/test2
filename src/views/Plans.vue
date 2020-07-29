<template>
  <div class="plans d-flex justify-content-center pb-5">
    <div class="p-3 content">
      <!-- 課程方案 -->
      <div class="mb-5" id="plans">
        <h4 class="section-title section-title-center mb-4">
          <b></b>
          <span class="section-title-main">課程方案</span>
          <b></b>
        </h4>
        <div class="p-3">
          <div>
            <p>
              為提升學習品質＆保持進步，
              我們希望除了課程時間以外，
              你也需要安排額外的時間自行練習，
              課程設計採以下方式。
            </p>
          </div>
          <ul>
            <li>預約制</li>
            <li>2～2.5 小時/堂</li>
            <li>1對1，學員程度相近時最多可至1對3</li>
          </ul>
          <!-- 價格 -->
          <div class="p-3 my-5 price-table">
            <table class="table">
              <thead>
                <tr>
                  <!-- <th scope="col">#</th> -->
                  <th scope="col">課程方案</th>
                  <th scope="col">使用期限</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="plan in plans" :key="plan.key">
                  <!-- <th scope="row">{{plan.key}}</th> -->
                  <td>
                    <b>${{plan.price}}</b>
                    / {{plan.lessons}}
                  </td>
                  <td>{{plan.limit}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 注意事項 -->
          <div>
            <h6>
              <font-awesome-icon :icon="['fas', 'exclamation-circle']" />
              <span> 注意事項</span>
            </h6>
            <ul>
              <li>
                教學地點以
                <b>烏石港</b> 及 鄰近浪點 為主，視浪況調整
              </li>
              <li>
                課程費用皆不含裝備，租借浪板
                <b>$400</b>
              </li>
            </ul>
          </div>
          <!-- 交通方式 -->
          <div>
            <h6>
              <font-awesome-icon :icon="['fas', 'bus-alt']" />
              <span> 交通方式</span>
            </h6>
            <ol>
              <li>
                <a
                  class="outter-link"
                  href="http://www.kingbus.com.tw/ticketRoute.php"
                  target="_blank"
                >國光客運</a> 1877路線
                <ul>
                  <li>捷運圓山站 - 南港展覽館 - 烏石港</li>
                </ul>
              </li>
              <li>火車搭乘至頭城車站</li>
            </ol>
            <div>
              <font-awesome-icon :icon="['fas', 'car']" />
              <span class="notation font-weight-bolder"> 我們提供車站至浪點接送</span>
            </div>
            <div>
              <font-awesome-icon :icon="['fas', 'tree']" />
              <span class="notation font-weight-bolder">
                 報名或其他問題歡迎
                <a
                  class="outter-link"
                  href="https://www.instagram.com/surf.tree"
                  target="_blank"
                >
                  聯絡我們
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Welcome from '@/components/Welcome.vue'

export default {
  name: "Plans",
  components: {
    // Welcome
  },
  data() {
    return {
      plans: [
        {
          key: "A",
          price: 7200,
          lessons: "4堂",
          limit: "30天"
        },
        {
          key: "B",
          price: 8400,
          lessons: "4堂",
          limit: "60天"
        },
        {
          key: "C",
          price: 20000,
          lessons: "12堂",
          limit: "180天"
        },
        {
          key: "New",
          price: 1500,
          lessons: "初次體驗",
          limit: "新學員，限一次"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.plans {
  background-image: url("../assets/bg-2_3-100.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  overflow-y: scroll;
  // margin-top: -105px;
  // padding-top: 105px;
}
// @media screen and (max-width: 480px) {
//   .plans {
//     margin-top: unset;
//     z-index: 1;
//   }
// }

.plans .content {
  max-width: 680px;
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

.plans a {
  color: #649aa2;
}

a.nav-link.active {
  background-color: #f8f9facc;
}

.price-table {
  background-color: #a4bec280;
  border-radius: 15px;
}

.price-table table {
  margin-bottom: 0;
}

span.notation {
  font-size: 0.9rem;
}

a.outter-link {
  border-block-end: 1.5px #649aa2 dotted;
  background-color: white;
}
</style>