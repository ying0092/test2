(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bff30"],{4064:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},r=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("h1",[s._v("Creating a Simple Blog Using Vue with Markdown")]),e("h4",[s._v("March 18, 2019")]),e("p",[s._v("I'm not a 'natural' frontend developer, learning vue and re-learning Javascript with my Java knowledge came as a challenge. Not to mention all those bundlers, builders, like webpack, gulp, grunt and other weird noises that adds to the overall complexitiy of learning modern web frameworks. But if there's one thing that helped me in learning new technologies that is, to just jump right in and build little projects. Teaching is also a widely accepted technique that will greatly help you in learning. It doesn't mean that you have to gather a huge audience that will listen to you teach something. Sometimes, the audience you need is just yourself. Write what you've learn with the intention of teaching it to your old (or future) stupid self. It's kinda weird and paradoxical I know but just roll with me on this.")]),e("p",[s._v("With that mind, exactly a year ago, I decided to add a blog section on my personal website just for fun. I just ported my previous portfolio to Vue and I was wondering what's the most simplest way to add blogging functionality to it. I know, some people will probably frown at the idea of using a frontend framework to develop a measly portfolio website in the first place. But if your goal is to really just getting yourself up and running with a framework, I'd argue that using it to build your portfolio website is a good start. It's a simple project that will really familiarize you with the basics and will give you enough motivation to complete it.")]),e("p",[s._v("So that's what I did. This post tells the story of how I set on adding a blog functionality on my Vue portfolio website. My thought-process, decisions, approach and what-nots.")]),e("p",[s._v("I know from the start that I want it to be really simple. I know ButterCMS is good and all but as much as possible I don't want to introduce that much complexity, it's just a simple personal website after all. What I really want is as straightforward as hard-coding and commiting a new webpage everytime I write a new post but still simple enough that I wouldn't worry about writing in an HTML markup. That's where markdown comes in. Markdown is a really popular lightweight markup language that just fits the bill.")]),e("p",[s._v("It's decided then. At the center of it all, what I want to accomplish is just two things:")]),e("ul",[e("li",[s._v("Be able to write my blogs in markdown")]),e("li",[s._v("Vue must be able to display these markdows as a regular html page")])]),e("p",[s._v("Essentially, to accomplish both, I just have to figure out how Vue can interpret markdown. Now, I'm not an expert with webpack, heck when I built my website years ago, I don't even know how to configure webpack myself, I was putting that off in favor of learning whatever framework I was learning at the moment. But being exposed with it for some time, I was able to pick up some concepts and context of what it does. In this case, I know that what I need is a webpack loader that can interpret markdown. Much like how "),e("code",{pre:!0},[s._v(".vue")]),s._v(" files comes out fine after passing through webpack because of "),e("code",{pre:!0},[s._v("vue-loader")]),s._v(".")]),e("h3",[s._v("Vue-Markdown-Loader")]),e("p",[s._v("Literally the first thing I did after that realization was to google "),e("em",[s._v('"vue markdown loader"')]),s._v(". And "),e("a",{attrs:{href:"https://github.com/QingWei-Li"}},[s._v("QingWei-Li")]),s._v("'s "),e("a",{attrs:{href:"https://github.com/QingWei-Li/vue-markdown-loader"}},[s._v("vue-markdown-loader repo")]),s._v(" comes back as the first result. The documentation is pretty straightforward, I added this code over at my "),e("code",{pre:!0},[s._v("vue.config.js")]),s._v(":")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports = {\n  chainWebpack(config){\n    config.module.rule("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'md'")]),s._v(")\n      .test("),e("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/\\.md/")]),s._v(")\n      .use("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-loader'")]),s._v(")\n      .loader("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-loader'")]),s._v(")\n      .end()\n      .use("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-markdown-loader'")]),s._v(")\n      .loader("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-markdown-loader/lib/markdown-compiler'")]),s._v(")\n      .options({\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("raw")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      })\n  }\n}\n")])]),e("p",[s._v("Like how "),e("code",{pre:!0},[s._v("vue-loader")]),s._v(" makes "),e("code",{pre:!0},[s._v(".vue")]),s._v(" files possible, "),e("code",{pre:!0},[s._v("vue-markdown-loader")]),s._v(" makes "),e("code",{pre:!0},[s._v(".md")]),s._v(" work within Vue. In essence, markdowns can now be interpreted as a Vue component. To test this, within my "),e("code",{pre:!0},[s._v("components/")]),s._v(" directory, I created the following "),e("code",{pre:!0},[s._v("foo.md")]),s._v(":")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-markdown"}},[e("span",{pre:!0,attrs:{class:"hljs-section"}},[s._v("# This is a test")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-section"}},[s._v("## Heading 2")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-emphasis"}},[s._v("_lorem ipsum_")]),s._v(" dolor "),e("span",{pre:!0,attrs:{class:"hljs-strong"}},[s._v("__amet__")]),s._v("\n")])]),e("p",[s._v("Imported it as a component on "),e("code",{pre:!0},[s._v("App.vue")]),s._v(" and used it within the template.")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":""}},[s._v("<template>\n  <div id=\"app\">\n    <foo />\n    ...\n  </div>\n</template>\n<script>\n  import Foo from '@/components/foo.md'\n  export default {\n    components: { Foo },\n    ...\n  }\n<\/script>\n")])]),e("p",[s._v("Doing a quick "),e("code",{pre:!0},[s._v("yarn serve")]),s._v(" and visiting "),e("code",{pre:!0},[s._v("localhost")]),s._v(", viola! It works!")]),e("p",[e("img",{attrs:{src:"https://www.josephharveyangeles.com/statics/images/blogs/2019/vue-markdown-blog/foo.png",alt:"foo"}})]),e("p",[s._v("At this point, we've verified that our Vue project can now understand and render markdown. We can now write our blogs in "),e("code",{pre:!0},[s._v(".md")]),s._v(" and just reference them wherever we like. And since it's a component there's nothing stopping us from using it as a route component, say in our "),e("code",{pre:!0},[s._v("router.js")]),s._v(":")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Router "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-router'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Home "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./views/Home.vue'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Foo "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./components/foo.md'")]),s._v("\n\nVue.use(Router)\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Router({\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'history'")]),s._v(",\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("base")]),s._v(": process.env.BASE_URL,\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("routes")]),s._v(": [\n    { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'home'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("component")]),s._v(": Home },\n    { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/foo'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'foo'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("component")]),s._v(": Foo }\n  ]\n})\n")])]),e("p",[s._v("Now everytime we visit "),e("code",{pre:!0},[s._v("/foo")]),s._v(" it will render the markdown contents of our "),e("code",{pre:!0},[s._v("foo.md")]),s._v(". Pretty neat, right? This works but wouldn't it be better if we could simplify the process of adding a new post a bit? We could create a separate file and put all blog entries in there, and that's the file that we update whenever we have a new blog post — good ol' indirection.")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[s._v("[\n  "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"foo"')]),s._v(",\n  "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"another-post"')]),s._v(",\n]\n")])]),e("p",[s._v("We'll have to change the way we register our route components a bit. We'll have to build those routes programmatically and make use of "),e("a",{attrs:{href:"https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components"}},[s._v("dynamic component registration")]),s._v(" using dynamic imports:")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Router "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-router'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Home "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./views/Home.vue'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Blogs "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/blogs.json'")]),s._v("\n\nVue.use(Router)\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Router({\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'history'")]),s._v(",\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("base")]),s._v(": process.env.BASE_URL,\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("routes")]),s._v(": [\n    { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'home'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("component")]),s._v(": Home },\n    ...Blogs.map("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("entry")]),s._v(" =>")]),s._v(" ({\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`/"),e("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${entry}")]),s._v("`")]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": entry,\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("component")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`./markdowns/"),e("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${entry}")]),s._v(".md`")]),s._v(")\n    }))\n  ]\n})\n")])]),e("p",[s._v("Notice in the above code, we are assigning the markdown filename to both "),e("code",{pre:!0},[s._v("path")]),s._v(" and "),e("code",{pre:!0},[s._v("name")]),s._v(". And for better structure, we're placing all our markdowns inside it's own directory. In this setup, we'll never have to mess with "),e("code",{pre:!0},[s._v("router.js")]),s._v(" again whenever we add a new blog post. Now, the only thing left to do is to create actual links that will point to them.")]),e("h3",[s._v("Putting it all together")]),e("p",[s._v("Using what we've learned, I've put things together and created a working demo on this "),e("a",{attrs:{href:"https://vue-markdown-blog.netlify.com"}},[s._v("link")]),s._v(". You can also check out the code in this "),e("a",{attrs:{href:"https://github.com/josephharveyangeles/vue-markdown-blog"}},[s._v("repository")]),s._v(". There our some minor changes compared to our previous experiments.")]),e("p",[s._v("First, let's look at the directory structure:")]),e("p",[e("img",{attrs:{src:"https://www.josephharveyangeles.com/statics/images/blogs/2019/vue-markdown-blog/filestruc.png",alt:"file structure"}})]),e("p",[s._v("Notice that I've created subdirectories "),e("code",{pre:!0},[s._v("2019")]),s._v(" and "),e("code",{pre:!0},[s._v("stories")]),s._v(" which refers to different sections of the blog. This changes how we structure our routes a little but will greatly improve our overall UI.")]),e("p",[s._v("Looking at "),e("code",{pre:!0},[s._v("statics/data/blogs.json")]),s._v(":")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[s._v("{\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"2019"')]),s._v(": [\n    {\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"id"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vue-markdown-blog"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"date"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"March 10, 2019"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"title"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Creating a Simple Blog using Vue + Markdown"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"description"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Simple and neat way to add a blogging feature to add on your website."')]),s._v("\n    }\n  ],\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"stories"')]),s._v(": [\n    {\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"id"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"maud-sparrow"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"date"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"April 21, 2018"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"title"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Maud Sparrow and the Four Wicked Horses"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"description"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Once upon a time there was a generous girl called Maud Sparrow. She was on the way to see her Albert Connor, when she decided to take a short cut through Spittleton Woods..."')]),s._v("\n    },\n    {\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"id"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"nico-borbaki"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"date"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"May 5, 2018"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"title"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Nefarious Nico Borbaki"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"description"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Nico Borbaki looked at the enchanted newspaper in his hands and felt conflicted..."')]),s._v("\n    },\n    {\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"id"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"jack-butterscotch"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"date"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"June 10, 2018"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"title"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Jack Butterscotch | The Dragon"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"description"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"In a hole there lived a tender, silver dragon named Jack Butterscotch. Not an enchanted red, stripy hole, filled with flamingos and a cold smell, nor yet a short, hairy, skinny hole with nothing in it to sit down on or to eat: it was a dragon-hole, and that means happiness..."')]),s._v("\n    },\n    {\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"id"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tiny-arrow-wars"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"date"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"July 27, 2018"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"title"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Galactic Tiny Arrow Wars"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"description"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"A long, long time ago in a tiny, tiny galaxy..."')]),s._v("\n    },\n    {\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"id"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"gargoyle-club"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"date"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"August 7, 2018"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"title"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Club of Gargoyle"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"description"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Molly Thornhill suspected something was a little off when her creepy daddy tried to club her when she was just six years old. Nevertheless, she lived a relatively normal life among other humans."')]),s._v("\n    },\n    {\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"id"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"simon-plumb"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"date"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"September 20, 2018"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"title"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Simon Plumb and the Two Kind Gerbils"')]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v('"description"')]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Once upon a time there was a virtuous boy called Simon Plumb. He was on the way to see his Annie Superhalk, when he decided to take a short cut through Thetford Forest..."')]),s._v("\n    }\n  ]\n}\n")])]),e("p",[s._v("Instead of an array of strings, I've converted it to an object. Each key refers to the blog section which also matches its subdirectory. The object array under each key refers to the actual blog entry. There are bunch of additional properties like "),e("code",{pre:!0},[s._v("date")]),s._v(" that we'll use in the UI but the important bit is the "),e("code",{pre:!0},[s._v("id")]),s._v(" which refers to the actual markdown component.")]),e("p",[s._v("(Also, you can put everything in a "),e("code",{pre:!0},[s._v("js")]),s._v(" file instead of "),e("code",{pre:!0},[s._v("json")]),s._v(". It's a matter of personal preference. Putting it in a "),e("code",{pre:!0},[s._v("js")]),s._v(" file will probably make your production build much smaller after webpack does it thing. But saving it in a "),e("code",{pre:!0},[s._v("json")]),s._v(" file under "),e("code",{pre:!0},[s._v("statics")]),s._v(" will act as a simple REST endpoint where I can issue "),e("code",{pre:!0},[s._v("GET")]),s._v(" requests from, which is useful if I end up integrating it to some other UI in the future.)")]),e("p",[s._v("I've implemented all those additional changes to be able to display a UI like this:")]),e("p",[e("img",{attrs:{src:"https://www.josephharveyangeles.com/statics/images/blogs/2019/vue-markdown-blog/home.png",alt:"home"}})]),e("p",[s._v("The last thing we need to do is to adjust "),e("code",{pre:!0},[s._v("router.js")]),s._v(". What it does is basically just map those blog sections into route objects. Entries under each section becomes the child of their respective route object. Basically, we'll be able to visit our blog entries using paths in this format: "),e("code",{pre:!0},[s._v("${section}/${blog entry}")]),s._v(", eg: "),e("code",{pre:!0},[s._v("2019/vue-markdown-blog")]),s._v(".")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Router "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-router'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Home "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./views/Home.vue'")]),s._v("\n\nVue.use(Router)\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" BlogEntries "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/data/blogs.json'")]),s._v(";\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" blogRoutes = "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".keys(BlogEntries).map("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("section")]),s._v(" =>")]),s._v(" {\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" children = BlogEntries[section].map("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("child")]),s._v(" =>")]),s._v(" ({\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": child.id,\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": child.id,\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("component")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`./markdowns/"),e("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${section}")]),s._v("/"),e("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${child.id}")]),s._v(".md`")]),s._v(")\n  }))\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`/"),e("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${section}")]),s._v("`")]),s._v(",\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": section,\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("component")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./views/Blog.vue'")]),s._v("),\n    children\n  }\n})\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Router({\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mode")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'history'")]),s._v(",\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("base")]),s._v(": process.env.BASE_URL,\n  "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("routes")]),s._v(": [\n    {\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/'")]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'home'")]),s._v(",\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("component")]),s._v(": Home\n    },\n    ...blogRoutes\n  ]\n})\n")])]),e("p",[s._v("This setup introduces another key improvement to our blog: messing with the styling. Notice that "),e("code",{pre:!0},[s._v("Blog.vue")]),s._v(" acts as a wrapper layout component of our blog entries. It contains the following code:")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("<template>\n  "),e("span",{pre:!0,attrs:{class:"xml"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"blog"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("router-view")]),s._v(" />")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("router-link")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"a"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"back"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-symbol"}},[s._v("&laquo;")]),s._v(" Back"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("router-link")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")])]),s._v("\n<"),e("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/template>\n")])])]),e("h4",[s._v("Styling")]),e("p",[s._v("We now have the opportunity to style the rendered markdown however we like. The key here is to target what will eventually be displayed inside "),e("code",{pre:!0},[s._v("<router-view />")]),s._v(" using a "),e("code",{pre:!0},[s._v("/deep/")]),s._v(" selector. See the following:")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[s._v("<template>\n  "),e("span",{pre:!0,attrs:{class:"xml"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"blog"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("router-view")]),s._v(" />")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("router-link")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("to")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"/"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tag")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"a"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"back"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-symbol"}},[s._v("&laquo;")]),s._v(" Back"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("router-link")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")])]),s._v("\n<"),e("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v('/template>\n<style lang="scss" scoped>\n.blog {\n  max-width: 50vw;\n  margin: 10rem auto;\n  /')]),s._v("deep/ {\n    h1 {\n      font-size: "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("rem;\n      margin-bottom: "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v(".2")]),s._v("rem;\n      color: #"),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("42")]),s._v("b883;\n    }\n    h4 {\n      margin-bottom: "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("rem;\n      color: #"),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35495")]),s._v("e;\n    }\n  }\n}\n<"),e("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/style>\n")])])]),e("p",[s._v("Check out "),e("a",{attrs:{href:"http://markedstyle.com/styles"}},[s._v("markedstyle.com")]),s._v(" for more markdown styling ideas. You can even import an external markdown style just don't forget to wrap it properly within a "),e("code",{pre:!0},[s._v(".blog /deep/")]),s._v(" selector. ie:")]),e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-scss"}},[e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/** external style **/")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".blog")]),s._v(" /deep/ {\n "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/** paste external markdown style here **/")]),s._v("\n}\n")])]),e("p",[s._v("Bit of a warning though, as much as possible one should avoid using "),e("code",{pre:!0},[s._v("/deep/")]),s._v(" because it somehow defeats the purpose of "),e("code",{pre:!0},[s._v("scoped")]),s._v(" and it's been deprecated by Chrome. Vue-loader just still supports it, that's why it works. But I'd argue that this is one those cases where it's useful. We don't want to pollute the global css scope so we'd like to contain styling within "),e("code",{pre:!0},[s._v("Blog.vue")]),s._v("'s "),e("em",[s._v("children")]),s._v(" so we use "),e("code",{pre:!0},[s._v("scoped")]),s._v(" and "),e("code",{pre:!0},[s._v("/deep/")]),s._v(" together. (Although, if someone more knowledgeable has a better solution for this I'll gladly take it.)")]),e("p",[s._v("And that's it! A simple blogging feature for your website without using any other 3rd-party service. Just plain and simple vue.")]),e("h3",[s._v("Further Improvements")]),e("p",[s._v("If you want to take it a step further, you can add page metas using all those additional fields inside blog entries, "),e("code",{pre:!0},[s._v("date")]),s._v(", "),e("code",{pre:!0},[s._v("title")]),s._v(", "),e("code",{pre:!0},[s._v("description")]),s._v(", etc. This would play nicely if you've implemented some sort of social sharing as well. You can check out my website to see this in action: "),e("a",{attrs:{href:"https://www.josephharveyangeles.com"}},[s._v("www.josephharveyangeles.com")])]),e("h3",[s._v("Useful Links")]),e("ul",[e("li",[e("a",{attrs:{href:"https://vue-markdown-blog.netlify.com"}},[s._v("Demo")])]),e("li",[e("a",{attrs:{href:"https://github.com/josephharveyangeles/vue-markdown-blog"}},[s._v("Project Repository")])]),e("li",[e("a",{attrs:{href:"https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components"}},[s._v("Dynamic Components")])]),e("li",[e("a",{attrs:{href:"https://cli.vuejs.org/guide/webpack.html#simple-configuration"}},[s._v("vue-cli webpack guide")])]),e("li",[e("a",{attrs:{href:"https://github.com/QingWei-Li/vue-markdown-loader"}},[s._v("vue-markdown-loader")])]),e("li",[e("a",{attrs:{href:"https://cli.vuejs.org/guide/css.html#postcss"}},[s._v("Working with CSS Modules")])]),e("li",[e("a",{attrs:{href:"http://markedstyle.com/styles"}},[s._v("Markdown styles")])])])])}],n=e("2877"),l={},o=Object(n["a"])(l,a,r,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0bff30.2ef59e61.js.map