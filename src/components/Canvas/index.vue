<script>
export default {
  name: 'Canvas',
  data() {
    return {
      canvas: null,
      ctx: null,
      w: null,
      h: null,
      radian: Math.PI / 180,
      main: {},
      second: {},
      third: {},
      fourth: {},
      frames: 0,
      img: null
    }
  },
  methods: {
    init() {
      this.canvas = document.getElementById('canvas')
      this.ctx = this.canvas.getContext('2d')
      this.resizeHandler()
      this.img = document.getElementById('img')
      this.initData(this.main, this.w / 2, this.h / 2, 300)
      this.initData(this.second, this.w / 2 + 300, this.h / 2 - 300, 60)
      this.initData(this.third, this.w / 2 + 430, this.h / 2 - 230, 30)
      this.initData(this.fourth, this.w / 2 - 300, this.h / 2 + 300, 80)
    },
    renderFrame() {
      // loop the animation
      requestAnimationFrame(this.renderFrame)
      this.frames++

      this.ctx.clearRect(0, 0, this.w, this.h)

      this.ctx.globalCompositeOperation = 'source-over'
      this.ctx.drawImage(this.img, this.w / 2 - 350, this.h / 2 - 350, 700, 700)
      this.updatePoint(this.main)
      this.ctx.globalCompositeOperation = 'destination-in'
      this.paintPoint(this.main.points)
      this.ctx.globalCompositeOperation = 'source-over'

      this.ctx.fillStyle = '#ffffff'
      this.updatePoint(this.second)
      this.paintPoint(this.second.points)

      this.ctx.fillStyle = '#111111'
      this.updatePoint(this.third)
      this.paintPoint(this.third.points)

      this.ctx.fillStyle = '#444444'
      this.updatePoint(this.fourth)
      this.paintPoint(this.fourth.points)
      this.ctx.fill()
    },
    initData(data, x, y, radius) {
      data.x = x
      data.y = y
      let temp = []
      this.newPoint(temp, x, y, radius)
      data.points = temp
      data.radius = radius
    },
    newPoint(Arr, x, y, radius) {
      let rand, r
      for (let a = 0; a < 360; a += 30) {
        rand = this.rnd() * 360
        r = radius + (radius / 5) * Math.sin(rand * this.radian)
        let obj = {
          rand,
          r,
          a,
          x: x + r * Math.cos(a * this.radian),
          y: y + r * Math.sin(a * this.radian)
        }
        Arr.push(obj)
      }
    },
    paintPoint(o) {
      const lastPointIndex = o.length - 1
      const pu0 = this.unionPoint(o, lastPointIndex, 0)
      this.ctx.beginPath()
      this.ctx.moveTo(pu0.x, pu0.y)
      for (var i = 0; i < o.length - 1; i++) {
        var pui = this.unionPoint(o, i, i + 1)
        this.ctx.quadraticCurveTo(o[i].x, o[i].y, pui.x, pui.y)
      }
      this.ctx.quadraticCurveTo(
        o[lastPointIndex].x,
        o[lastPointIndex].y,
        pu0.x,
        pu0.y
      )
      this.ctx.fill()
    },
    unionPoint(obj, a, b) {
      var up = {}
      up.x = (obj[a].x + obj[b].x) / 2
      up.y = (obj[a].y + obj[b].y) / 2
      return up
    },
    updatePoint(data) {
      for (let i = 0; i <= data.points.length - 1; i++) {
        const p = data.points[i]
        p.a += 0.1 // rotate speed
        p.r =
          data.radius +
          (data.radius / 10) * Math.sin((this.frames + p.rand) * this.radian)
        p.x = data.x + p.r * Math.cos(p.a * this.radian)
        p.y = data.y + p.r * Math.sin(p.a * this.radian)
      }
    },
    rnd() {
      Math.seed = (Math.seed * 108013 + 2531011) & 0xffffffff
      return Math.abs(Math.seed >> 16) / 32869
    },
    resizeHandler() {
      this.w = window.innerWidth
      this.h = window.innerHeight
      this.canvas.width = this.w
      this.canvas.height = this.h
    }
  },
  mounted() {
    this.init()
    this.renderFrame()
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  }
}
</script>

<template src="./template.html" />
<style lang="scss" src="./style.scss" />
