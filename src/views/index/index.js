import '../../common/app'

import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'
import Segmenter from 'src/common/static/js/segmenter.js'

import Vue from 'vue'
import store from 'src/store/index'

new Vue({
  el: "#nav_menu",
  store,
  data: {
    zoom: false
  },
  mounted(){
    this.init()
  },
  computed: {
    sidebarStatus(){
      return this.$store.state.sidebar.show
    }
  },
  watch: {
    sidebarStatus(n, o){
      this.zoom = n
    }
  },
  methods: {
    init(){
      var headline = document.querySelector('.trigger-headline'),
        trigger = document.querySelector('.btn--trigger'),
        segmenter = new Segmenter(document.querySelector('.segmenter'), {
          pieces: 1, //分块数量
          shadowsAnimation: {
            opacity: 1,
          },
          animation: {
            duration: 2000,
            easing: 'easeInOutCubic',
            delay: 0,
            opacity: 1,
            translateZ: 1,
          },
          positions: [ // 分块集合
            {top: 0, left: 0, width: '100%', height: '100%'},
          ],
          parallax: true,
          parallaxMovement: {min: 10, max: 30},
          onReady: function() {
            segmenter.animate();
          }
      });
    }
  }
})