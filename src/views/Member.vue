<template>
    <div class="member">
        <landing class="member__landing">
            <title-1 class="member__title">{{ member.firstName }}</title-1>
            <b-img class="member__img__wrapper">
                <img
                    :sizes="member.image.sizes"
                    :srcset="member.image.srcset.join('\n')"
                    :src="member.image.src"
                    alt=""
                    class="member__img"
                    v-if="member.image">
                
                <div class="member__img__placeholder" v-else></div>
            </b-img>
            <b-text class="member__text">
                {{ member.description }}
            </b-text>
        </landing>
        <footer class="member__footer">
            <router-link :to="`/membre/${member.next}`" class="member__footer__link">
                <span>{{ member.next }}</span>
                <svg width="39" height="12" viewBox="0 0 39 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="9.28421" width="38.0616" height="2.11453" fill="black"/>
                    <rect x="28.3359" width="13.4989" height="2.35836" transform="rotate(43 28.3359 0)" fill="black"/>
                </svg>
            </router-link>
        </footer>
    </div>
</template>

<script>
import Landing from '../components/structure/Landing'
// import members from '../assets/members.json'
import slugify from 'slugify'

export default {
    props: [ 'id' ],
    async created () {
        const slug = slugify(this.$route.params.name)

        console.log('slug', slug)

        this.member = await fetch (`https://thawing-mountain-46939.herokuapp.com/api/member/${slug}`)
            .then(response => response.json())
            .then(json => json)

        // const found = members.members.find(m => m.firstName.toLowerCase() === this.$route.params.name.toLowerCase())
        // this.member = found
    },
    watch: {
        '$route': async function (to, from) {    
            console.log('o')
            const slug = slugify(this.$route.params.name)

            console.log('slug', slug)

            this.member = await fetch (`https://thawing-mountain-46939.herokuapp.com/api/member/${slug}`)
                .then(response => response.json())
                .then(json => json)
        }
    },
    data () {
        return {
            member: {},
        }
    },
    components: {
        Landing
    },
}
</script>

<style lang="scss">
    .member {
        overflow-x: hidden;

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

        &__title {
            text-align: right;
        }

        &__landing {
            padding-bottom: 10%;
        }

        &__img {
            &__wrapper {
                width: 80%;
                height: 140px;

                & .vue-responsive-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            &__placeholder {
                height: 100%;
                width: 100%;
            }

            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }
    }

    @media screen and (min-width: 600px) {
    }

    @media screen and (min-width: 900px) {
        .member {
            &__landing {
                padding-bottom: var(--landing-padding);

            }
            &__img {
                &__wrapper {
                    
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    padding-top: 5%;
                    box-sizing: border-box;

                    height: 80%;
                    width: 50%;
                }
            }

            &__title {
                margin-right: -5%;
                margin-top: 0.2em;
                margin-bottom: .2em;
            }

            &__text {
                margin-left: 60%;
                margin-right: 5%;
                text-align: justify;
            }
        }
    }
</style>
