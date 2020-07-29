<template>
  <div class="courses d-flex justify-content-center pb-5">
    <div class="p-3 content">
      <!-- 課程簡介 -->
      <div id="courses">
        <h4 class="section-title section-title-center mb-4">
          <b></b>
          <span class="section-title-main">課程簡介</span>
          <b></b>
        </h4>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation" v-for="tab in tabs" :key="tab.key">
            <a
              class="nav-link"
              :class="{active: tab.selected}"
              data-toggle="tab"
              :href="tab.href"
              role="tab"
              :aria-controls="tab.key"
              :aria-selected="tab.selected"
            >
              <font-awesome-icon :icon="['fas', tab.icon]" />
              {{tab.title}}
            </a>
          </li>
        </ul>
        <div class="tab-content p-4" id="myTabContent">
          <div
            v-for="tab in tabs"
            :key="tab.key"
            class="tab-pane fade show"
            :class="{active: tab.selected}"
            :id="tab.key"
            role="tabpanel"
          >
            <div v-if="tab.for">
              <h6>課程對象</h6>
              <ul>
                <li v-for="text in tab.for" :key="text">{{text}}</li>
              </ul>
              <h6>課程目標</h6>
              <ul>
                <li v-for="target in tab.targets" :key="target">{{target}}</li>
              </ul>
              <h6>
                課程內容
                <span>
                  <a
                    class="outline-collapse px-1"
                    data-toggle="collapse"
                    data-target=".multi-collapse"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1 multiCollapseExample2"
                  >
                    展開
                    <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                  </a>
                </span>
              </h6>
              <ol class="outline">
                <li v-for="item in tab.outline" :key="item.title">
                  <span
                    data-toggle="collapse"
                    href="#multiCollapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >{{ item.title }}</span>
                  <div class="collapse multi-collapse" id="multiCollapseExample1">
                    <div>
                      <ul>
                        <li v-for="(detail,i) in item.details" :key="i">{{detail}}</li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </div>

            <div v-else>
              <div v-for="(question,i) in tab.questions" :key="i">
                <h6>
                  <font-awesome-icon :icon="['far', 'comment-dots']" />
                  {{question.question}}
                </h6>
                <p class="answer">{{question.answer}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueScrollTo from "vue-scrollto";

export default {
  name: "Courses",
  components: {
  },
  mounted: function() {
    if (this.$router.currentRoute["hash"]) {
      VueScrollTo.scrollTo(this.$router.currentRoute["hash"], 500);
    }
  },
  watch: {
    $route(to, from) {
      console.log("hello");
      console.log(to);
      console.log(from);
      console.log(this.$router.currentRoute["hash"]);
      if (this.$router.currentRoute["hash"]) {
        VueScrollTo.scrollTo(this.$router.currentRoute["hash"], 500);
      }
      // react to route changes...
    }
  },
  data() {
    return {
      tabs: [
        {
          key: "basic",
          icon: "seedling",
          title: "初級",
          href: "#basic",
          selected: true,
          for: ["已經接觸過衝浪，還不太熟練，想要認真學會衝浪"],
          targets: [
            "建立穩固的基礎知識",
            "能適應腰胸以內的浪況",
            "獨立追浪下浪，並且能夠穩定左右跑及流暢的控制方向"
          ],
          outline: [
            {
              title: "海象介紹",
              details: [
                "認識海流，知道如何避開危險",
                "如何判斷浪況是否適合自己的程度"
              ]
            },
            {
              title: "衝浪禮儀",
              details: [
                "如何定位在正確的等浪位置",
                "怎樣算搶浪？如何避免搶浪？",
                "浪頭的人一直下，永遠都排不到我，該怎麼辦？",
                "如何判斷路線，避免造成碰撞或阻擋他人"
              ]
            },
            {
              title: "裝備介紹",
              details: [
                "浪板種類&板型介紹",
                "舵",
                "防寒衣：我需要防寒衣嗎？該如何挑選",
                "蠟：面蠟底蠟差別是什麼？需要那一種？"
              ]
            },
            {
              title: "起乘",
              details: ["如何依照不同浪況微調起乘時機及重心控制"]
            },
            {
              title: "划水&追浪",
              details: [
                "依據浪況調整划水節奏，什麼時候應該加速？要往後看還是往前看？",
                "Set進來時，該挑選哪一道浪？",
                "想要增強划水技能，該選擇什麼樣的訓練？"
              ]
            },
            {
              title: "轉向",
              details: []
            }
          ]
        },
        {
          key: "advanced",
          icon: "tree",
          title: "進階",
          href: "#advanced",
          selected: false,
          for: ["可以獨立追浪下浪，能夠穩定流暢的左右跑"],
          targets: [
            "適應一人以內的浪況，並能在海上判斷及應變突發狀況",
            "進階技巧，加速/ 走板/ 板頭駕乘/ CUTBACK/ SNAP 等",
            "掌握浪的節奏，在理想的時間點及浪壁位置做出動作"
          ],
          outline: [
            {
              title: "海況判斷",
              details: [
                "在陌生浪點或面對不同的海象，如何判斷安全下水位置",
                "除了浪況預報以外，還能怎麼判斷浪況？",
                "如何依據當下條件：潮汐、風向、浪向，或是水裡浪人的衝浪狀況 等... 選擇浪點",
                "如何有效利用海流"
              ]
            },
            {
              title: "等浪&追浪",
              details: [
                "觀察浪況變化，動態調整位",
                "面對較大的浪，追浪節奏該做什麼調整？",
                "浪面較陡或浪速快時如何適應"
              ]
            },
            {
              title: "浪板挑選＆風格建立",
              details: [
                "認識不同風格，衝浪不應該是駕馭浪，而是與浪共舞",
                "嘗試不同板型並尋找適合自己的板子"
              ]
            },
            {
              title: "控板",
              details: [
                "如何控制速度及方向，讓自己保持在一道浪最好的位置",
                "如何在做動作時保有柔軟度及張力而不失速度",
                "如何結合控制力、速度、流暢度、協調性，安全又優雅地完成一道浪"
              ]
            }
          ]
        },
        {
          key: "faq",
          icon: "question-circle",
          title: "Q&A",
          href: "#faq",
          selected: false,
          questions: [
            {
              question: "我沒有裝備",
              answer:
                "我們有配合的店家可租借相關用品，教練會依照衝浪程度及身材為你挑選合適的板子。"
            },
            {
              question: "我應該選擇 BASIC 還是 ADVANCED ?",
              answer: "不用擔心，我們會為你評估現階段適合的課程內容 "
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.courses {
  background-image: url("../assets/bg-2_3-100.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  overflow-y: scroll;
  // margin-top: -105px;
  // padding-top: 105px;
}
// @media screen and (max-width: 480px) {
//   .courses {
//     margin-top: unset;
//     z-index: 1;
//   }
// }

.courses .content {
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

.courses a {
  color: #649aa2;
}

a.nav-link.active {
  background-color: #f8f9facc;
}

.tab-content {
  border-left: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  background-color: #f8f9faa3;
}
@media screen and (min-width: 680px) {
  .tab-content {
    min-width: 650px;
  }
}

.outline > li {
  margin-bottom: 0.8rem;
}

.outline ul li {
  font-size: 0.9rem;
}

a.outline-collapse {
  font-size: 0.7rem;
  border: 1px solid;
  border-radius: 20%;
}

p.answer {
  padding-left: 20px;
}
</style>