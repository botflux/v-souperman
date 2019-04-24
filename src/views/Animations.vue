<template>
    <landing class="animations__landing">
        <div class="animations">
            <div class="animations__img">
                <img :src="animation.image.src" :srcset="animation.image.srcset.join('\n')" :sizes="animation.image.sizes" alt="">
            </div>
            <div class="animations__content">
                <subtitle-1 style="text-transform: initial;">{{ animation.date }} - {{ animation.place }}</subtitle-1>
                <p class="animations__overline" style="margin-top: 0;">{{ animation.seats }} places - {{ animation.hour }} - {{ animation.price != 0 ? animation.price + '€': 'Gratuit' }}</p>
                <title-1 class="animations__title">{{ animation.name }}</title-1>
                <b-text class="animations__text">{{ animation.description }}</b-text>
                <router-link to="/agenda" class="animations__back">Retour</router-link>
            </div>
        </div>
    </landing>
</template>

<script>
import Landing from '../components/structure/Landing'

export default {
    components: {
        Landing
    },
    data () {
        return {
            animation: {}
        }
    },
    methods: {
        fetchAnimation () {
            fetch(`https://thawing-mountain-46939.herokuapp.com/api/animation/${this.$route.params.slug}`)
                .then(response => response.json())
                .then(data => this.animation = data)
        }
    },
    created () {
        this.fetchAnimation()
    },
    watch: {
        '$route': function (v) {
            this.fetchAnimation()
        },
        animation: function (v) {
            
        console.log(v)
        }
    },
    computed: {
        isTablet () {
            return (window.innerWidth >= 600)
        }
    }
}
</script>

<style lang="scss">
    .animations {
        height: 100%;

        &__img {
            width: 100%;
            height: 150px;

            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &__back {
            color: #000;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 0.2em;
        }

        &__title {
            margin-top: 0;
        }

        &__overline {
            margin-bottom: 0;
            font-size: 1.3rem;
            font-weight: 200;
        }
    }

    @media screen and (min-width: 600px) {
        .animations {
            &__img {
                height: 300px;
            }
        }
    }

    @media screen and (min-width: 900px) {
        .animations {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: stretch;

            &__content {
                width: 60%;
            }

            &__landing {
                display: flex;
                align-items: center;
            }

            &__title {
                position: relative;
                z-index: 2;
            }

            &__img {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                width: 30%;
                height: 100%;
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .animations {
            &__content {
                width: 50%;
            }

            &__img {
                width: 40%;
            }
        }
    }

    @media screen and (min-width: 1500px) {
        .animations {
            &__content {
                width: 45%;
            }
        }
    }
</style>


