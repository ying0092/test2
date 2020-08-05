import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Courses from '../views/Courses.vue'
import Plans from '../views/Plans.vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Blogs from '../views/Blogs.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

import BlogEntries from '../statics/data/blogs.json';
const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    // component: () => import(`../markdowns/${section}/${child.id}.md`)
    components: {
      default: () => import(`../markdowns/${section}/${child.id}.md`),
      //nav: Nav,
      //footer: Footer
    }
  }))
  return {
    path: `/${section}`,
    name: section,
    //component: () => import('../views/Blog.vue'),
    components: {
      default: () => import('../views/Blog.vue'),
      nav: Nav,
      footer: Footer
    },
    children
  }
})

console.log(blogRoutes)

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
      nav: Nav,
      footer: Footer
    }
  },
  {
    path: '/courses',
    name: 'Courses',
    // component: Courses,
    components: {
      default: Courses,
      nav: Nav,
      footer: Footer
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
      default: Blogs,
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
  },
  ...blogRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
