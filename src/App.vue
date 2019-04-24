<template>
  <div id="app" ref="app">
    <np-progress-container></np-progress-container>
    <app-navigation></app-navigation>
    <div class="app__hamburger__container">
      <hamburger class="app__hamburger" />
    </div>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave">
      <router-view :key="$route.params.name" />
    </transition>
    <transition>
      <router-view name="footer" />
    </transition>
  </div>
</template>

<script>
import Hamburger from './components/navigation/Hamburger'
import AppFooter from './components/AppFooter'
import AppNavigation from './components/navigation/AppNavigation'
import { TweenMax } from 'gsap'
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'

export default {
  components: {
    'hamburger': Hamburger,
    AppFooter,
    AppNavigation,
    'np-progress-container': NprogressContainer
  },
  // created () {
  //   this.handleResize()
  //   window.addEventListener('resize', this.handleResize)
  // },
  // destroyed () {
  //   window.removeEventListener('resize', this.handleResize)
  // },
  // watch: {
  //   $route (to, from) {
  //     console.log('zefez')
  //     this.handleResize()
  //   }
  // },
  methods: {
    beforeLeave (e) {
      e.classList.add('fixed')
      console.log('hello')
    },
    leave (e, done) {
      TweenMax.fromTo (e, .3, { /* transform: 'translate(0, 0)',  */opacity: 1 }, { /* transform: 'translate(0, 100%)', */ opacity: 0, onComplete: done })
    },
    afterLeave (e) {
      e.classList.remove('fixed')
    },

    beforeEnter (e) {
      e.classList.add('fixed')
    },
    enter (e, done) {
      TweenMax.fromTo(e, .3, {
        /* transform: 'translate(0, -100%)', */ opacity: 0
      }, {
        /* transform: 'translate(0, 0)', */ opacity: 1, onComplete: done
      })
    },
    afterEnter (e) {
      e.classList.remove('fixed')
    },
    // handleResize () {
    //   console.log('resize', window.innerHeight, document.querySelector('#app').getBoundingClientRect().height)
    //   if (window.innerWidth > 900 && window.innerHeight + 10 > document.querySelector('#app').getBoundingClientRect().height) {
    //     console.log('a')
    //     document.documentElement.classList.add('overflow-y')
    //   } else {
    //     console.log('b')
    //     document.documentElement.classList.remove('overflow-y')
    //   }
    // }
  },
}
</script>

<style>
  :root {
    --color-primary: #FC720E
  }
</style>



<style lang="scss">

  #nprogress .bar {
    background: #FFAA00 !important;
  }
.overflow-y {
  overflow-y: hidden;
}

.fixed {
  position: fixed;
  width: inherit;
}
body {
  font-family: 'Source sans pro';
  margin: 0;
  padding: 1px 0;
}

#app {
  position: relative;
  min-height: calc(100vh - var(--landing-margin) * 2);
  padding: 1px 0;
}

.app {
  &__hamburger {

    &__container {  
      position: fixed;
      top: 0;
      display: flex;
      justify-content: center;
      width: 100%;

      z-index: 1000;
    }
  }
}

@media screen and (min-width: 600px) {
  .app {
    &__hamburger {
      & > svg {
        width: 48px;
        height: 48px;
      }
    }
  }
}

@media screen and (min-width: 900px) {
  .app {
    &__hamburger {
      &__container {
        width: 10%;
        top: auto;
        right: 0;
        justify-content: flex-end;
        bottom: calc(50% - 24px);
      }
    }
  }
}

</style>
