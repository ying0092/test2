(function(t){function e(e){for(var a,i,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(a=!1)}a&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},i={app:0},s={app:0},o=[];function r(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2d0bff30":"2ef59e61","chunk-2d0c7b16":"e8ba9263","chunk-2d0cc602":"2ca6809a","chunk-2d0d001a":"a317d647","chunk-2d0d9fe3":"c8d8201d","chunk-2d22fd44":"62b2edaa","chunk-74bf1b8a":"58bcd24a","chunk-79291d46":"47d5b2c4"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-79291d46":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d0bff30":"31d6cfe0","chunk-2d0c7b16":"31d6cfe0","chunk-2d0cc602":"31d6cfe0","chunk-2d0d001a":"31d6cfe0","chunk-2d0d9fe3":"31d6cfe0","chunk-2d22fd44":"31d6cfe0","chunk-74bf1b8a":"31d6cfe0","chunk-79291d46":"c54f3492"}[t]+".css",s=l.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===a||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],f.parentNode.removeChild(f),n(o)},f.href=s;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){i[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}s[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/test2/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"10ed":function(t,e,n){},"1dfc":function(t,e,n){"use strict";var a=n("d45e"),i=n.n(a);i.a},"1ff6":function(t){t.exports=JSON.parse('{"2019":[{"id":"vue-markdown-blog","date":"March 10, 2019","title":"Creating a Simple Blog using Vue + Markdown","description":"Simple and neat way to add a blogging feature to add on your website."}],"stories":[{"id":"maud-sparrow","date":"April 21, 2018","title":"Maud Sparrow and the Four Wicked Horses","description":"Once upon a time there was a generous girl called Maud Sparrow. She was on the way to see her Albert Connor, when she decided to take a short cut through Spittleton Woods..."},{"id":"nico-borbaki","date":"May 5, 2018","title":"Nefarious Nico Borbaki","description":"Nico Borbaki looked at the enchanted newspaper in his hands and felt conflicted..."},{"id":"jack-butterscotch","date":"June 10, 2018","title":"Jack Butterscotch | The Dragon","description":"In a hole there lived a tender, silver dragon named Jack Butterscotch. Not an enchanted red, stripy hole, filled with flamingos and a cold smell, nor yet a short, hairy, skinny hole with nothing in it to sit down on or to eat: it was a dragon-hole, and that means happiness..."},{"id":"tiny-arrow-wars","date":"July 27, 2018","title":"Galactic Tiny Arrow Wars","description":"A long, long time ago in a tiny, tiny galaxy..."},{"id":"gargoyle-club","date":"August 7, 2018","title":"Club of Gargoyle","description":"Molly Thornhill suspected something was a little off when her creepy daddy tried to club her when she was just six years old. Nevertheless, she lived a relatively normal life among other humans."},{"id":"simon-plumb","date":"September 20, 2018","title":"Simon Plumb and the Two Kind Gerbils","description":"Once upon a time there was a virtuous boy called Simon Plumb. He was on the way to see his Annie Superhalk, when he decided to take a short cut through Thetford Forest..."}]}')},2924:function(t,e,n){"use strict";var a=n("f9b3"),i=n.n(a);i.a},"340d":function(t,e,n){},"34b3":function(t,e,n){},"45ac":function(t,e,n){var a={"./2019/vue-markdown-blog.md":["4064","chunk-2d0bff30"],"./stories/gargoyle-club.md":["5269","chunk-2d0c7b16"],"./stories/jack-butterscotch.md":["65af","chunk-2d0d001a"],"./stories/maud-sparrow.md":["6a68","chunk-2d0d9fe3"],"./stories/nico-borbaki.md":["99afe","chunk-74bf1b8a"],"./stories/simon-plumb.md":["ea4f","chunk-2d22fd44"],"./stories/tiny-arrow-wars.md":["4e50","chunk-2d0cc602"]};function i(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],i=e[0];return n.e(e[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id="45ac",t.exports=i},4991:function(t,e,n){t.exports=n.p+"img/footer.c9bfdc76.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{name:"nav"}}),n("div",{staticClass:"content"},[n("router-view",{style:{minHeight:t.windowHeight+"px"}})],1),n("router-view",{attrs:{name:"footer"}})],1)},s=[],o={name:"Home",data:function(){return{windowHeight:window.innerHeight}},mounted:function(){var t=this;window.onresize=function(){return function(){t.windowHeight=window.innerHeight}()}},watch:{windowHeight:function(t){this.windowHeight=t}}},r=o,l=(n("034f"),n("2877")),c=Object(l["a"])(r,i,s,!1,null,null,null),u=c.exports,d=n("9483");Object(d["a"])("".concat("/test2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("99af"),n("d81d"),n("b64b"),n("d3b7");var f=n("2909"),v=n("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo text-center"},[a("header",{attrs:{id:"header"}},[a("div",{staticClass:"content2"},[a("div",{staticClass:"animated fadeInDown slow"},[a("img",{staticClass:"logo",attrs:{src:n("9b19"),alt:""}})]),t._m(0)]),a("div",{staticClass:"animated fadeInDown delay-2s"},[a("nav",[a("ul",t._l(t.items,(function(e){return a("router-link",{key:e.title,attrs:{tag:"li",to:{path:e.link,hash:e.fragment}}},[a("a",[t._v(" "+t._s(e.title)+" "),a("span",[t._v(t._s(e.subtitle))])])])})),1)])])])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner animated fadeInUp slow"},[n("p",[t._v("Learning and growing, just like a tree")])])}],h={name:"Home",components:{},data:function(){return{items:[{title:"關於我們",link:"about"},{title:"課程簡介",link:"courses"},{title:"課程方案",link:"plans"},{title:"BLOG",link:"blog"}]}}},_=h,b=(n("1dfc"),Object(l["a"])(_,p,m,!1,null,"b77d4ce2",null)),g=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about d-flex justify-content-center pb-5"},[a("Nav"),a("div",{staticClass:"p-3 content"},[t._m(0),a("div",{staticClass:"p-3 team"},[a("h5",[t._v("團隊成員")]),a("div",{staticClass:"row p-2"},[a("div",{staticClass:"col-sm-4"},[a("img",{staticClass:"team-img",attrs:{src:n("7721"),alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"p-2"},[a("h6",[t._v("小八/ 衝浪教練")]),a("p",[t._v(" 接觸衝浪約12年，長短板都玩，非常具有天份的選手 (自己說 "),a("font-awesome-icon",{staticClass:"mx-1",attrs:{icon:["far","grin-squint"]}}),a("font-awesome-icon",{staticClass:"mx-1",attrs:{icon:["far","grin-squint-tears"]}}),a("font-awesome-icon",{staticClass:"mx-1",attrs:{icon:["far","grin-beam-sweat"]}}),t._v(") "),a("br"),t._v("熱愛教學，熟知學習衝浪的各個環節，對每個階段的學員都能認真細心的傳達她對衝浪的想法。 ")],1),t._m(1)])])]),a("div",{staticClass:"row p-2"},[a("div",{staticClass:"col-sm-4"},[a("img",{staticClass:"team-img",attrs:{src:n("9958"),alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"p-2"},[a("h6",[t._v("陳穎/ CEO")]),t._v("接觸衝浪約4年，包辦 SURFTREE 衝浪教學以外的大小事。雖然不教學，但也熱愛衝浪。努力練習中！快來成為我的衝浪夥伴 "),a("font-awesome-icon",{attrs:{icon:["far","smile-wink"]}})],1)])])])])],1)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"section-title section-title-center mb-4"},[n("b"),n("span",{staticClass:"section-title-main"},[t._v("關於")]),n("b")]),n("div",{staticClass:"title-1"},[n("p",{staticClass:"p-5"},[t._v(" 我們提供專業衝浪訓練 "),n("span",[t._v(",")]),n("span",{staticClass:"d-block d-sm-none"},[n("br")]),t._v(" 歡迎每一位想深入學習的衝浪的人 ")])]),n("div",{staticClass:"p-3"},[n("h5",[t._v("初衷")]),n("p",{staticClass:"title-2"},[t._v(" LEARNING AND GROWING, JUST LIKE A TREE "),n("br"),t._v("學衝浪沒有捷徑，像種樹一樣，慢慢且扎實的 ")]),n("p",{staticClass:"text"},[t._v(" 愛衝浪，不僅是喜歡從事這項運動，更深深為這樣的生活方式著迷。 "),n("br"),t._v("台灣的衝浪文化發展了近半個世紀，想接觸到衝浪其實很容易， SURFTREE 提供的不只是一次性的體驗，想要帶你深刻探索衝浪世界。 希望你不僅是衝過浪，還要愛上衝浪，成為彼此的夥伴，在衝浪世界裡茁壯。 "),n("br"),t._v("一起 "),n("b",[t._v("衝浪去！")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v(" ISA SURF COACH Lv1 "),n("br"),t._v("國際衝浪指導教練 ")]),n("li",[t._v(" ILS(International Life Saving Federation) "),n("br"),t._v("國際救生員證 ")]),n("li",[t._v(" Emergency Medical Technician II "),n("br"),t._v("中級緊急救護員 ")])])}],y={name:"About",components:{}},C=y,E=(n("a5c8"),Object(l["a"])(C,w,k,!1,null,"3da3bddd",null)),P=E.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"courses d-flex justify-content-center pb-5"},[n("div",{staticClass:"p-3 content"},[n("div",{attrs:{id:"courses"}},[t._m(0),n("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},t._l(t.tabs,(function(e){return n("li",{key:e.key,staticClass:"nav-item",attrs:{role:"presentation"}},[n("a",{staticClass:"nav-link",class:{active:e.selected},attrs:{"data-toggle":"tab",href:e.href,role:"tab","aria-controls":e.key,"aria-selected":e.selected}},[n("font-awesome-icon",{attrs:{icon:["fas",e.icon]}}),t._v(" "+t._s(e.title)+" ")],1)])})),0),n("div",{staticClass:"tab-content p-4",attrs:{id:"myTabContent"}},t._l(t.tabs,(function(e){return n("div",{key:e.key,staticClass:"tab-pane fade show",class:{active:e.selected},attrs:{id:e.key,role:"tabpanel"}},[e.for?n("div",[n("h6",[t._v("課程對象")]),n("ul",t._l(e.for,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0),n("h6",[t._v("課程目標")]),n("ul",t._l(e.targets,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0),n("h6",[t._v(" 課程內容 "),n("span",[n("a",{staticClass:"outline-collapse px-1",attrs:{"data-toggle":"collapse","data-target":".multi-collapse","aria-expanded":"false","aria-controls":"multiCollapseExample1 multiCollapseExample2"}},[t._v(" 展開 "),n("font-awesome-icon",{attrs:{icon:["fas","external-link-alt"]}})],1)])]),n("ol",{staticClass:"outline"},t._l(e.outline,(function(e){return n("li",{key:e.title},[n("span",{attrs:{"data-toggle":"collapse",href:"#multiCollapseExample1",role:"button","aria-expanded":"false","aria-controls":"multiCollapseExample1"}},[t._v(t._s(e.title))]),n("div",{staticClass:"collapse multi-collapse",attrs:{id:"multiCollapseExample1"}},[n("div",[n("ul",t._l(e.details,(function(e,a){return n("li",{key:a},[t._v(t._s(e))])})),0)])])])})),0)]):n("div",t._l(e.questions,(function(e,a){return n("div",{key:a},[n("h6",[n("font-awesome-icon",{attrs:{icon:["far","comment-dots"]}}),t._v(" "+t._s(e.question)+" ")],1),n("p",{staticClass:"answer"},[t._v(t._s(e.answer))])])})),0)])})),0)])])])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",{staticClass:"section-title section-title-center mb-4"},[n("b"),n("span",{staticClass:"section-title-main"},[t._v("課程簡介")]),n("b")])}],j=n("f13c"),O=n.n(j),A={name:"Courses",components:{},mounted:function(){this.$router.currentRoute["hash"]&&O.a.scrollTo(this.$router.currentRoute["hash"],500)},watch:{$route:function(t,e){console.log("hello"),console.log(t),console.log(e),console.log(this.$router.currentRoute["hash"]),this.$router.currentRoute["hash"]&&O.a.scrollTo(this.$router.currentRoute["hash"],500)}},data:function(){return{tabs:[{key:"basic",icon:"seedling",title:"初級",href:"#basic",selected:!0,for:["已經接觸過衝浪，還不太熟練，想要認真學會衝浪"],targets:["建立穩固的基礎知識","能適應腰胸以內的浪況","獨立追浪下浪，並且能夠穩定左右跑及流暢的控制方向"],outline:[{title:"海象介紹",details:["認識海流，知道如何避開危險","如何判斷浪況是否適合自己的程度"]},{title:"衝浪禮儀",details:["如何定位在正確的等浪位置","怎樣算搶浪？如何避免搶浪？","浪頭的人一直下，永遠都排不到我，該怎麼辦？","如何判斷路線，避免造成碰撞或阻擋他人"]},{title:"裝備介紹",details:["浪板種類&板型介紹","舵","防寒衣：我需要防寒衣嗎？該如何挑選","蠟：面蠟底蠟差別是什麼？需要那一種？"]},{title:"起乘",details:["如何依照不同浪況微調起乘時機及重心控制"]},{title:"划水&追浪",details:["依據浪況調整划水節奏，什麼時候應該加速？要往後看還是往前看？","Set進來時，該挑選哪一道浪？","想要增強划水技能，該選擇什麼樣的訓練？"]},{title:"轉向",details:[]}]},{key:"advanced",icon:"tree",title:"進階",href:"#advanced",selected:!1,for:["可以獨立追浪下浪，能夠穩定流暢的左右跑"],targets:["適應一人以內的浪況，並能在海上判斷及應變突發狀況","進階技巧，加速/ 走板/ 板頭駕乘/ CUTBACK/ SNAP 等","掌握浪的節奏，在理想的時間點及浪壁位置做出動作"],outline:[{title:"海況判斷",details:["在陌生浪點或面對不同的海象，如何判斷安全下水位置","除了浪況預報以外，還能怎麼判斷浪況？","如何依據當下條件：潮汐、風向、浪向，或是水裡浪人的衝浪狀況 等... 選擇浪點","如何有效利用海流"]},{title:"等浪&追浪",details:["觀察浪況變化，動態調整位","面對較大的浪，追浪節奏該做什麼調整？","浪面較陡或浪速快時如何適應"]},{title:"浪板挑選＆風格建立",details:["認識不同風格，衝浪不應該是駕馭浪，而是與浪共舞","嘗試不同板型並尋找適合自己的板子"]},{title:"控板",details:["如何控制速度及方向，讓自己保持在一道浪最好的位置","如何在做動作時保有柔軟度及張力而不失速度","如何結合控制力、速度、流暢度、協調性，安全又優雅地完成一道浪"]}]},{key:"faq",icon:"question-circle",title:"Q&A",href:"#faq",selected:!1,questions:[{question:"我沒有裝備",answer:"我們有配合的店家可租借相關用品，教練會依照衝浪程度及身材為你挑選合適的板子。"},{question:"我應該選擇 BASIC 還是 ADVANCED ?",answer:"不用擔心，我們會為你評估現階段適合的課程內容 "}]}]}}},F=A,U=(n("2924"),Object(l["a"])(F,S,x,!1,null,"48cbf03b",null)),H=U.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plans d-flex justify-content-center pb-5"},[n("div",{staticClass:"p-3 content"},[n("div",{staticClass:"mb-5",attrs:{id:"plans"}},[t._m(0),n("div",[t._m(1),t._m(2),n("div",{staticClass:"p-3 my-5 price-table"},[n("table",{staticClass:"table"},[t._m(3),n("tbody",t._l(t.plans,(function(e){return n("tr",{key:e.key},[n("td",[n("b",[t._v("$"+t._s(e.price))]),t._v(" / "+t._s(e.lessons)+" ")]),n("td",[t._v(t._s(e.limit))])])})),0)])]),n("div",[n("h6",[n("font-awesome-icon",{attrs:{icon:["fas","exclamation-circle"]}}),n("span",[t._v(" 注意事項")])],1),t._m(4)]),n("div",[n("h6",[n("font-awesome-icon",{attrs:{icon:["fas","bus-alt"]}}),n("span",[t._v(" 交通方式")])],1),t._m(5),n("div",[n("font-awesome-icon",{attrs:{icon:["fas","car"]}}),n("span",{staticClass:"notation font-weight-bolder"},[t._v(" 我們提供車站至浪點接送")])],1),n("div",[n("font-awesome-icon",{attrs:{icon:["fas","tree"]}}),n("span",{staticClass:"notation font-weight-bolder"},[t._v(" 報名或其他問題歡迎 "),n("a",{staticClass:"outter-link",attrs:{href:"https://www.instagram.com/surf.tree",target:"_blank"}},[t._v(" 聯絡我們 "),n("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)])],1)])])])])])},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",{staticClass:"section-title section-title-center mb-4"},[n("b"),n("span",{staticClass:"section-title-main"},[t._v("課程方案")]),n("b")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(" 為提升學習品質＆保持進步， 我們希望除了課程時間以外， 你也需要安排額外的時間自行練習， 課程設計採以下方式。 ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("預約制")]),n("li",[t._v("2～2.5 小時/堂")]),n("li",[t._v("1對1，學員程度相近時最多可至1對3")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("課程方案")]),n("th",{attrs:{scope:"col"}},[t._v("使用期限")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v(" 教學地點以 "),n("b",[t._v("烏石港")]),t._v(" 及 鄰近浪點 為主，視浪況調整 ")]),n("li",[t._v(" 課程費用皆不含裝備，租借浪板 "),n("b",[t._v("$400")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[n("a",{staticClass:"outter-link",attrs:{href:"http://www.kingbus.com.tw/ticketRoute.php",target:"_blank"}},[t._v("國光客運")]),t._v(" 1877路線 "),n("ul",[n("li",[t._v("捷運圓山站 - 南港展覽館 - 烏石港")])])]),n("li",[t._v("火車搭乘至頭城車站")])])}],T={name:"Plans",components:{},data:function(){return{plans:[{key:"A",price:7200,lessons:"4堂",limit:"30天"},{key:"B",price:8400,lessons:"4堂",limit:"60天"},{key:"C",price:2e4,lessons:"12堂",limit:"180天"},{key:"New",price:1500,lessons:"單堂試上",limit:"新學員，限一次"}]}}},R=T,B=(n("eeff"),Object(l["a"])(R,$,N,!1,null,"1c1e8772",null)),G=B.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("nav",{staticClass:"my-navbar sticky-top"},[n("ul",{staticClass:"justify-content-center"},t._l(t.items,(function(e){return n("router-link",{key:e.title,attrs:{tag:"li",to:{path:e.link,hash:e.fragment}}},[n("a",[t._v("| "+t._s(e.title))])])})),1)]),n("div",{staticClass:"toggle-menu"})])},q=[],I={name:"Nav",mounted:function(){var t=this;window.onresize=function(){return function(){t.windowHeight=window.innerHeight}()}},watch:{windowHeight:function(t){this.windowHeight=t}},data:function(){return{windowHeight:window.innerHeight,drawer:null,item:1,items:[{title:"關於我們",link:"about"},{title:"課程簡介",link:"courses"},{title:"課程方案",link:"plans"},{title:"ＢＬＯＧ",link:"blog"}]}}},L=I,D=(n("7090"),Object(l["a"])(L,M,q,!1,null,"ac45e15c",null)),J=D.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footer"}},[a("div",[a("div",{staticClass:"footer-menu"},[a("ul",{staticClass:"footer-menu-inner"},t._l(t.items,(function(e){return a("router-link",{key:e.title,staticClass:"menu-item",attrs:{tag:"li",to:{path:e.link,hash:e.fragment}}},[a("a",[t._v(t._s(e.title))])])})),1)])]),a("div",[a("div",{staticClass:"footer-contact"},[a("div",{staticClass:"text"},[t._v("Follow us")]),a("div",{staticClass:"link"},[a("a",{attrs:{href:"https://www.instagram.com/surf.tree/",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)])])]),a("div",[a("div",{staticClass:"footer-logo"},[a("img",{attrs:{src:n("9b19"),alt:""}})])]),t._m(0)])},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"copyright"},[t._v("© 2020 SURFTREE. All Rights Reserved.")])])}],K={data:function(){return{windowHeight:window.innerHeight,drawer:null,background:n("4991"),item:1,items:[{title:"關於 SURFTREE",link:"about"},{title:"課程簡介",link:"courses"},{title:"課程方案",link:"plans"},{title:"ＢＬＯＧ",link:"blog"}]}}},W=K,z=(n("d454"),Object(l["a"])(W,X,Y,!1,null,"214e2c08",null)),V=z.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog d-flex justify-content-center pb-5"},[n("div",{staticClass:"p-3 content"},[n("div",{staticClass:"sections"},t._l(Object.keys(t.entries),(function(e,a){return n("div",{key:a,staticClass:"group"},[n("h2",{staticClass:"center"},[t._v(t._s(e))]),t._l(t.entries[e],(function(e){return n("div",{key:e.id,staticClass:"section"},[n("div",{staticClass:"entry"},[n("h3",{on:{click:function(n){return t.$router.push({name:e.id})}}},[t._v(" "+t._s(e.title)+" "),n("span",{staticClass:"subtitle"},[t._v(t._s(e.date))])]),n("p",[t._v(t._s(e.description))])])])}))],2)})),0)])])},Z=[],tt=n("1ff6"),et={name:"About",components:{},computed:{entries:function(){return tt}}},nt=et,at=(n("b77d"),Object(l["a"])(nt,Q,Z,!1,null,"302827ec",null)),it=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article d-flex justify-content-center pb-5"},[n("Nav"),t._m(0)],1)},ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-3 content"},[n("h1",{attrs:{id:"pu-eps-"}},[t._v("PU 或 EPS 板哪個好？")]),n("hr"),n("h3",{attrs:{id:"-surfboard-blanks-"}},[t._v("關於 Surfboard Blanks 的小歷史")]),n("p",[t._v(" 在50年代後期，Hobie Alter 開始嘗試使用不同的 PU 配方，以製作比 Balsa 木材更容易成型和生產的 Blank。這成為衝浪板製造的一個轉捩點，因為發泡材質更容易成型也能更穩定的加工，板子的重量下降，性能也達到頂峰。 ")]),n("blockquote",[n("ul",[n("li",[n("strong",[t._v("PU")]),t._v(" - Polyurethane，一般縮寫為 PU，是一種高分子材料，在日常生活領域被用來製造各種泡沫和塑料海綿。 ")]),n("li",[n("strong",[t._v("Foam")]),t._v(" - 發泡材質，現代製板主要使用此類材質作為衝浪板主體。 ")]),n("li",[n("strong",[t._v("Surfboard blank")]),t._v(" - 裸板，初步加工為浪板形狀的 Foam。 ")])])]),n("p",[t._v("此後不久，Hobie 擁有一家實力雄厚的工廠，大量生產 PU Foam 並指名 Gordon Clark 來全力協助進行這項工作。後來 Gordon 接管了 Foam 的製造，如此一來，Hobie 可以專注於製作衝浪板，Hobie Surfboards 也因此成為第一個大規模的衝浪板製造商，為我們今天看到的衝浪產業開了一扇門。")]),n("p",[n("img",{attrs:{src:"https://i.imgur.com/AtjrFcP.jpg",alt:""}})]),n("p",[t._v("2005年，Gordon Clark 的 Foam 工廠被一場可怕的大火燒毀，並停止營運。在沒有其他製造商能夠迅速填補這個空缺的情況下，他們必須等待新廠商測試新的 PU Foam 配方，使得 EPS 成為衝浪板製造商另一個可行的選擇，因此 EPS Foam 往前躍進了一大步。")]),n("p",[n("img",{attrs:{src:"https://i.imgur.com/GH78RMA.jpg",alt:""}}),n("code",[t._v("70年代中期：Gordon Clark跟他的工廠")])]),n("p",[t._v("儘管 EPS Foam 在70年代或更早之前就已被使用，但這場重大的 PU Foam 災難是讓大多數衝浪板製造商開始使用其他材質的主要原因。")]),n("p",[t._v("在現代，EPS Foam 已成為多數衝浪板大廠的常規選擇之一。性能屬性雖與 PU 稍有不同，但同樣值得注意。在特定浪況下，比起 PU/PE 板，某些頂尖衝浪者反而會更喜歡使用 EPS/EPOXY 板。")]),n("p",[t._v("它們都是很棒的選擇，但是對於我們這些沒辦法擁有所有類型板子的普通浪人來說，在購入新板之前，我們需要考慮這些差異並做出明智的決定。")]),n("hr"),n("h3",{attrs:{id:"pu-pe-"}},[t._v("PU / PE板")]),n("p",[t._v(" PU板(玻纖板) - PU FOAM + POLY樹脂 PE板(EPOXY 板)- PU FOAM + EPOXY樹脂 ")]),n("p",[t._v("長期以來，這些都是大多數品牌的標準規格，並且是目前為止範圍最廣，價格最便宜的選擇。由於 Foam 的重量和密度，PU / PE板在水中的位置略沉，有助於將板緣保持在水平面下，從而使您在劃過浪面時擁有刀子劃過的感覺。")]),n("blockquote",[n("p",[t._v("giving you a nice “knifey” feel when slicing through the waves face.")])]),n("p",[t._v("服貼浪面的特性使他們能夠更好地處理一些斷斷續續的浪況，並且不容易彈跳。在水中略沉也有利於衝管浪，在浪管中提供更多的支撐力。")]),n("h4",{attrs:{id:"pu-pe-"}},[t._v("PU / PE比較便宜。")]),n("p",[t._v("這通常是大多數人的決定因素。相較於 EPS 結構，PE Foam 的製作成本是比較便宜的。")]),n("p",[n("img",{attrs:{src:"https://i.imgur.com/m5OZllx.jpg",alt:""}})]),n("hr"),n("h3",{attrs:{id:"eps-"}},[t._v("EPS板")]),n("p",[t._v("EPS 的許多優點使它成為許多品牌中的熱門選項，其中最值得注意的就是重量。")]),n("p",[t._v("EPS Foam 比 PU 更輕，這成為那些喜歡 air 的衝浪者一個絕佳的選擇。較輕的衝浪板能更簡單的快速轉向，這種超強的靈敏度對於衝浪進步是非常有幫助的，它使你可以做出一些快速轉向的花招。")]),n("p",[t._v("因為它比較浮在水面上，會讓衝浪者有一種更輕盈的感覺。也是更快提升速度的原因，使其更容易滑過平坦的浪區。結合這些因素使它們成為小浪板的一個好選項。")]),n("h4",{attrs:{id:"eps-"}},[t._v("EPS更環保。")]),n("p",[t._v("與 PU 不同，EPS 可以回收。對於注重環境永續發展的製板商及衝浪者而言，這是顯而易見的選擇。")]),n("p",[t._v("你可以在所有環保衝浪板的結構中找到這種 Foam。通常與生物樹脂和玻璃纖維的替代品（例如亞麻布）結合使用。")]),n("p",[t._v("環氧樹脂(EXPOXY)是用於 EPS Foam 的唯一樹脂，比 Poly 樹脂強壯一點，也更有彈性，使其更易恢復形狀。而 Poly 則比較脆一點所以容易導致裂痕。")]),n("hr"),n("h3",{attrs:{id:"-"}},[t._v("哪一個適合你？")]),n("p",[t._v("現在的你對於不同的Foam具有什麼特性有了更好的了解，那麼在購買你的衝浪板時應該可以做出更好的決定。")])])}],rt={name:"Article",data:function(){return{articles:[{id:1,title:"PU 或 EPS 板哪個好？",date:"2020 Jul 10",content:[{id:1,type:"subtitle",value:"關於 Surfboard Blanks 的小歷史"},{id:2,type:"text",value:"在50年代後期，Hobie Alter 開始嘗試使用不同的 PU(註1) 配方，以製作比 Balsa 木材更容易成型和生產的 Blank(註2)。這成為衝浪板製造的一個轉捩點，因為發泡材質更容易成型也能更穩定的加工，板子的重量下降，性能也達到頂峰。"},{id:3,type:"text",value:"此後不久，Hobie 擁有一家實力雄厚的工廠，大量生產 PU Foam 並指名 Gordon Clark 來全力協助進行這項工作。後來 Gordon 接管了 Foam 的製造，如此一來，Hobie 可以專注於製作衝浪板，Hobie Surfboards 也因此成為第一個大規模的衝浪板製造商，為我們今天看到的衝浪產業開了一扇門。"},{id:4,type:"img",value:"https://i.imgur.com/AtjrFcP.jpg"},{id:5,type:"text",value:"2005年，Gordon Clark 的 Foam 工廠被一場可怕的大火燒毀，並停止營運。在沒有其他製造商能夠迅速填補這個空缺的情況下，他們必須等待新廠商測試新的 PU Foam 配方，使得 EPS 成為衝浪板製造商另一個可行的選擇，因此 EPS Foam 往前躍進了一大步。"},{id:6,type:"img",value:"https://i.imgur.com/GH78RMA.jpg"},{id:7,type:"text",value:"儘管 EPS Foam 在70年代或更早之前就已被使用，但這場重大的 PU Foam 災難是讓大多數衝浪板製造商開始使用其他材質的主要原因。"},{id:8,type:"text",value:"在現代，EPS Foam 已成為多數衝浪板大廠的常規選擇之一。性能屬性雖與 PU 稍有不同，但同樣值得注意。在特定浪況下，比起 PU/PE 板，某些頂尖衝浪者反而會更喜歡使用 EPS/EPOXY 板。"},{id:9,type:"text",value:"它們都是很棒的選擇，但是對於我們這些沒辦法擁有所有類型板子的普通浪人來說，在購入新板之前，我們需要考慮這些差異並做出明智的決定。"}]}]}}},lt=rt,ct=(n("f09c"),Object(l["a"])(lt,st,ot,!1,null,"0896b7b2",null)),ut=ct.exports;a["a"].use(v["a"]);var dt=Object.keys(tt).map((function(t){var e=tt[t].map((function(e){return{path:e.id,name:e.id,components:{default:function(){return n("45ac")("./".concat(t,"/").concat(e.id,".md"))}}}}));return{path:"/".concat(t),name:t,components:{default:function(){return n.e("chunk-79291d46").then(n.bind(null,"fd3f"))},nav:J,footer:V},children:e}}));console.log(dt);var ft=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",components:{default:P,nav:J,footer:V}},{path:"/courses",name:"Courses",components:{default:H,nav:J,footer:V}},{path:"/plans",name:"Plans",components:{default:G,nav:J,footer:V}},{path:"/blog",name:"Blog",components:{default:it,nav:J,footer:V}},{path:"/article",name:"Article",components:{default:ut,nav:J,footer:V}}].concat(Object(f["a"])(dt)),vt=new v["a"]({mode:"history",base:"/test2/",routes:ft,scrollBehavior:function(){return{x:0,y:0}}}),pt=vt,mt=n("77ed"),ht=n.n(mt),_t=(n("1157"),n("4989"),n("f9e3"),n("ecee")),bt=n("f2d1"),gt=n("c074"),wt=n("b702"),kt=n("ad3d");a["a"].use(ht.a),a["a"].use(O.a),_t["c"].add(gt["a"],bt["a"],wt["a"]),a["a"].component("font-awesome-icon",kt["a"]),a["a"].config.productionTip=!1,new a["a"]({router:pt,render:function(t){return t(u)},created:function(){if(sessionStorage.redirect){var t=sessionStorage.redirect;delete sessionStorage.redirect,this.$router.push(t)}}}).$mount("#app")},"592b":function(t,e,n){},7090:function(t,e,n){"use strict";var a=n("7ced"),i=n.n(a);i.a},7721:function(t,e,n){t.exports=n.p+"img/ba.928830b7.jpg"},"7ced":function(t,e,n){},"85ec":function(t,e,n){},9958:function(t,e,n){t.exports=n.p+"img/ying.ce7e3562.jpg"},"9b19":function(t,e,n){t.exports=n.p+"img/logo.4299f32a.svg"},a421:function(t,e,n){},a5c8:function(t,e,n){"use strict";var a=n("592b"),i=n.n(a);i.a},b77d:function(t,e,n){"use strict";var a=n("a421"),i=n.n(a);i.a},d454:function(t,e,n){"use strict";var a=n("340d"),i=n.n(a);i.a},d45e:function(t,e,n){},eeff:function(t,e,n){"use strict";var a=n("10ed"),i=n.n(a);i.a},f09c:function(t,e,n){"use strict";var a=n("34b3"),i=n.n(a);i.a},f9b3:function(t,e,n){}});
//# sourceMappingURL=app.37f3adc5.js.map