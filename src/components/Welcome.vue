<template>
  
      <kinesis-container>
        <div class="d-flex justify-content-center align-self-end">
          <kinesis-element :strength="22" class="j-flex">
            <div class="p-2 align-self-end d-flex p-2 animated zoomIn slow">
              <img class="tree" :src="require('../assets/tree1.svg')" alt />
            </div>
          </kinesis-element>
          <kinesis-element :strength="30" class="j-flex">
            <div class="p-2 align-self-end d-flex p-2 animated zoomIn delay-1s">
              <img class="tree" :src="require('../assets/tree2.svg')" alt />
            </div>
          </kinesis-element>
          <kinesis-element :strength="15" class="j-flex">
            <div class="p-2 align-self-end animated zoomIn delay-2s">
              <img class="role" :src="require('../assets/tree3.svg')" alt />
            </div>
          </kinesis-element>
          <kinesis-element :strength="25" class="j-flex">
            <div class="p-2 align-self-end animated zoomIn delay-3s">
              <img class="tree" :src="require('../assets/tree4.svg')" alt />
            </div>
          </kinesis-element>
        </div>
        <div class="d-flex justify-content-center">
          <kinesis-element :strength="23">
            <div class="p-2 animated zoomInLeft delay-3s slow">
              <img class="logo" :src="require('../assets/name.svg')" alt />
            </div>
          </kinesis-element>
          <kinesis-element :strength="30">
            <div class="p-2 animated zoomInRight delay-4s pl-4">
              <img class="logo" :src="require('../assets/name_ch.svg')" alt />
            </div>
          </kinesis-element>
        </div>
      </kinesis-container>
</template>

<script>
// @ is an alias to /src
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "Welcome",
  components: {
    KinesisContainer,
    KinesisElement
  }
};
</script>

<style lang="scss" scoped>
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
</style>