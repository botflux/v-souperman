<template>
    <footer class="member__footer">
        <router-link :to="`/membre/${member.next}`" class="member__footer__link">
            <span>{{ member.next }}</span>
            <svg width="39" height="12" viewBox="0 0 39 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="9.28421" width="38.0616" height="2.11453" fill="black"/>
                <rect x="28.3359" width="13.4989" height="2.35836" transform="rotate(43 28.3359 0)" fill="black"/>
            </svg>

        </router-link>
    </footer>
</template>

<script>

import members from '../assets/members.json'
export default {
    beforeRouteEnter (to, from, next) {
        const found = members.members.find(m => m.firstName.toLowerCase() === to.params.name.toLowerCase())

        if (!found) {
            next('/membre')
        }

        next(vm => {
            vm.member = found
        })
    },
    beforeRouteUpdate (to, from, next) {
        const found = members.members.find(m => m.firstName.toLowerCase() === to.params.name.toLowerCase())
        if (!found) {
            next('/membre')
        }
        this.member = found
        next()
    },
    data() {
        return {
            member: {}
        }
    },
}
</script>


<style lang="scss">
    .member {
        &__footer {
            position: absolute;
            bottom: 0;
            right: 0;
            background: #FF5500;
            &__link {
                color: #000;
                letter-spacing: 0.2em;
                font-weight: 700;
                text-decoration: none;
                text-transform: uppercase;

                & span {
                    display: inline-block;
                    padding: 1em 2em;
                    background: var(--color-primary);
                }

                & svg {
                    padding: 0 1em;
                }
            }
        }
    }

    @media screen and (min-width: 900px) {

    }
</style>
