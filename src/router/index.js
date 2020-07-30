import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Courses from '../views/Courses.vue'
import Plans from '../views/Plans.vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Blog from '../views/Blog.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // component: About
    components: {
      default: About,
      nav: Nav
    }
  },
  {
    path: '/courses',
    name: 'Courses',
    // component: Courses,
    components: {
      default: Courses,
      nav: Nav
    }
  },
  {
    path: '/plans',
    name: 'Plans',
    // component: Courses,
    components: {
      default: Plans,
      nav: Nav,
      footer: Footer
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
    components: {
      default: Blog,
      nav: Nav,
      footer: Footer
    }
  },
  {
    path: '/article',
    name: 'Article',
    components: {
      default: Article,
      nav: Nav,
      footer: Footer
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router