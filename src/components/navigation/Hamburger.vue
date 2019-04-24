<template>
    <button class="hamburger" :data-hide="hide" @click="handleClick()">
        <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5.05688" y="0.765625" width="20.2698" height="1.64987" fill="white"/>
            <rect x="0.555664" y="6.02487" width="24.6094" height="1.64062" fill="white"/>
            <rect x="4.82129" y="11.2749" width="20.2698" height="1.64987" fill="white"/>
        </svg>
    </button>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    created () {
        console.log('created')
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
        console.log('destroyed')
        window.removeEventListener('scroll', this.handleScroll)
    },
    data () {
        return {
            lastScroll: 0,
            dir: 0
        }
    },
    methods: {
        handleScroll () {
            if (window.scrollY - this.lastScroll > 0) {
                this.lastScroll = window.scrollY
                this.dir = 1
            } else if (window.scrollY - this.lastScroll <= 0) {
                this.lastScroll = window.scrollY
                this.dir = -1
            }

            this.scrolled = window.scrollY > 0
        },
        handleClick () {
            this.setActive(!this.navActive)
        },
        ...mapActions([
            'setActive'
        ])
    },
    computed: {
        hide () {
            if (this.dir == 1) return 'out'
            else return 'in'
        },
        ...mapState({
            navActive: state => state.navActive
        })
    }
}
</script>


<style lang="scss">
    .hamburger {
        outline: 0;
        border: 0;
        background: var(--color-primary);
        padding: 1em;
        display: block;

        &[data-hide] {
            transition: all .3s;
        }

        &[data-hide="in"] {
            transform: translateY(0);
        }

        &[data-hide="out"] {
            transform: translateY(-100px);
        }
    }

    @media screen and (min-width: 900px) {
        .hamburger {
            &[data-hide="in"] {
                transform: translateX(0);
            }

            &[data-hide="out"] {
                transform: translateX(100px);
            }
        }
    }
</style>

