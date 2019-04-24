<template>
    <div class="agenda-item">
        <div class="agenda-item__image__wrapper">
            <img :src="image.src" :srcset="image.srcset" :sizes="image.sizes" class="agenda-item__image">
        </div>
        <div class="agenda-item__content">
            <subtitle-1 class="agenda-item__overline">{{ date + ' - ' + place }}</subtitle-1>
            <title-1 class="agenda-item__title">{{ name }}</title-1>
            <b-text class="agenda-item__description">{{ description|slice }}</b-text>
            <router-link class="agenda-item__button" :to="{ name: 'animations', params: { slug }}">En savoir plus</router-link>
        </div>
    </div>
</template>

<script>
import slugify from 'slugify'

export default {
    props: {
        name: String,
        date: String,
        place: String,
        description: String,
        image: Object,
        id: String
    },
    computed: {
        slug () {
            return slugify(this.name)
        }
    },
    filters: {
        slice (v) {
            const limit = () => {
                if (window.innerWidth >= 600) return 200
                else if (window.innerWidth >= 900) return 350
                else if (window.innerWidth >= 1200) return 200
                else 80
            }

            if (v.length > limit()) {
                return v.slice(0, limit()) + '...'
            } 

            return v
        }
    }
}
</script>

<style lang="scss">
    .agenda-item {
        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;

            &__wrapper {
                width: 100%;
                height: 200px;
            }
        }

        &__title {
            margin-top: 0;
        }

        &__overline {
            margin-top: 1em;
        }

        &__content {
            padding: 1em;
        }

        &__button {
            text-transform: uppercase;
            text-decoration: none;
            color: #000;
        }
    }

    @media screen and (min-width: 600px) {
        .agenda-item {
            &__content {
                padding: 1em 10%;
            }

            &__image {
                &__wrapper {
                    height: 350px;
                }
            }
        }
    }

    @media screen and (min-width: 900px) {
        .agenda-item {
            display: grid;
            grid-template-columns: 1fr 1fr;

            &__image {
                &__wrapper {
                    height: 100%;
                }
            }

            &__content {
                box-sizing: border-box;
                padding: 2em;
            }

            &:nth-child(even) {
                direction: rtl;
            }
        }
    }

    @media screen and (min-width: 1500px) {
        .agenda-item {
            &:nth-child(even) {
                direction: ltr;
            }

            min-height: 50vh;

            grid-template-columns: 1fr;
            position: relative;

            &__content {
                opacity: 0;
                transition: all .3s;
            box-sizing: border-box;
            }

            &__title {
                font-size: 70px;
            }

            &__image__wrapper {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                z-index: -2;
            }

            &::after {

                content: " ";
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                background: var(--color-primary);
                z-index: -1;
                opacity: 0;
                transition: all .3s;
            }

            &:hover {
                &::after {
                    opacity: 1;
                }
                & .agenda-item {
                    &__content {
                        opacity: 1;
                    }
                    
                }
            }
        }
    }
</style>

