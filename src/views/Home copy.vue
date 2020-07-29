<template>
  <div class="home" :style="{ height: activeColor}">
    <div class="landing">
      <div class="welcome">
         <div class="d-flex justify-content-center align-self-end">
          <div class="p-2 align-self-end d-flex p-2 animated zoomIn slow">
              <img class="tree" :src="require('../assets/tree1.svg')" alt />
            </div>
          <div class="p-2 align-self-end d-flex p-2 animated zoomIn delay-1s">
              <img class="tree" :src="require('../assets/tree2.svg')" alt />
            </div>
          <div class="p-2 align-self-end animated zoomIn delay-2s">
              <img class="role" :src="require('../assets/tree3.svg')" alt />
            </div>
          <div class="p-2 align-self-end animated zoomIn delay-3s">
              <img class="tree" :src="require('../assets/tree4.svg')" alt />
            </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="p-2 animated zoomInLeft delay-3s slow">
              <img class="logo" :src="require('../assets/name.svg')" alt />
            </div>
          <div class="p-2 animated zoomInRight delay-4s pl-4">
              <img class="logo" :src="require('../assets/name_ch.svg')" alt />
            </div>
        </div>
      </div>
      <div class="scroll"></div>
    </div>
    <div class="square p-2 animated fadeIn"></div>
    <div class="section1 text-content">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi ad reiciendis reprehenderit, aliquid, corrupti nesciunt pariatur vero iste adipisci deserunt eum. Minima ad eligendi tenetur pariatur, at ea vero veritatis.</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  }
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  // background-image: url('../assets/bg2.jpg');
  // background-size: cover;
}
.home .landing {
  position: relative;
  /* -webkit-mask: url("../assets/mask.png") no-repeat center center / contain;
  mask: url("../assets/mask.png") no-repeat center center / contain;
  filter: grayscale(70%) opacity(0.5); */
}
.square {
  z-index: 200;
  min-width: 350px;
  min-height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  margin: auto;
  background-color: #e9f0f1;
  background-image: url("../assets/bg2.jpg");
  background-size: cover;
  filter: opacity(0.3);
  -webkit-mask: url("../assets/mask.png") no-repeat center center / contain;
  mask: url("../assets/mask.png") no-repeat center center / contain;
}
.welcome {
  z-index: 300;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
}
.tree {
  height: 14vw;
  max-height: 95px;
  min-height: 50px;
}
.role {
  height: 22vw;
  max-height: 145px;
  min-height: 80px;
}
.logo {
  height: 3vw;
  min-height: 15px;
  max-height: 20px;
}
.j-flex {
  display: flex !important;
}
.scroll {
  width: 40px;
  height: 40px;
  border: 1px solid #333;
  border-radius: 50%;
  position: relative;
  left: calc(50% - 20px);
  top: 80vh;
  animation: down 1.5s infinite;
  -webkit-animation: down 1.5s infinite;
  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 12px;
    width: 12px;
    height: 12px;
    border-left: 1px solid #333;
    border-bottom: 1px solid #333;
    transform: rotate(-45deg);
  }
}

@keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translate(0);
  }
}

@-webkit-keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translate(0);
  }
}

.section1 {
  background-color: #c9d6df;
}
</style>