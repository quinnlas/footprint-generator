<template>
  <div>
    <button @click="draw">OK</button><hr>
    <canvas id="canvas" :height="height" :width="width" style="border: 1px solid black"></canvas>
  </div>
</template>

<script>
import conf from './conf'
import draw from './tools/draw'
const {height, width, pixelsPerBlock} = conf
export default {
  name: 'App',
  data() {
    return {
      height: height * pixelsPerBlock,
      width: width * pixelsPerBlock
    }
  },
  methods: {
    draw() {
      draw('canvas')
    }
  },
  mounted() {
    this.draw()
  }
}
</script>

<style>
</style>
