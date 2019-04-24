<template>
    <nav class="nav" :data-hide="hide">
        <ul class="nav__list">
            <li class="nav__list__item">
                <router-link class="nav__list__item__link" to="/" @click.native="setActive(false)" title="Accueil">Accueil</router-link>
            </li>
            <li class="nav__list__item">
                <router-link class="nav__list__item__link" to="/membre" @click.native="setActive(false)" title="La Troupe">La Troupe</router-link>
            </li>
            <li class="nav__list__item">
                <router-link class="nav__list__item__link" to="/agenda" @click.native="setActive(false)" title="Agenda">Agenda</router-link>
            </li>
            <li class="nav__list__item">
                <router-link class="nav__list__item__link" to="/contact" @click.native="setActive(false)" title="Contact">Contact</router-link>
            </li>
            <li class="nav__list__item">
                <router-link class="nav__list__item__link" to="/presse" @click.native="setActive(false)" title="Presse">Presse</router-link>
            </li>
            <li class="nav__list__item">
                <router-link class="nav__list__item__link" to="/mentions-legales" @click.native="setActive(false)" title="Mentions légales">Mentions légales</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            navActive: state => state.navActive
        }),
        hide () {
            if (this.navActive) return 'in'
            else return 'out'
        }
    },
    methods: {
        ...mapActions([
            'setActive'
        ])
    }
}
</script>

<style lang="scss">
    .nav {
        z-index: 999;

        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        background: var(--color-primary);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &[data-hide] {
            transition: all 1s;
        }

        &[data-hide="in"] {
            transform: translateY(0);
        }

        &[data-hide="out"] {
            transform: translateY(-100%);
        }

        &__list {
            text-align: center;
            list-style: none;
            margin: 0;
            padding: 0;

            &__item {
                margin-bottom: 0.5em;
                &__link {
                    text-decoration: none;
                    color: #fff;
                    text-transform: uppercase;
                    font-weight: 700;
                    letter-spacing: 0.2em;
                    font-size: 2rem;
                }
            }
        }
    }

    @media screen and (min-width: 600px) {
        .nav {
            &__list {
                &__item {
                    &__link {
                        font-size: 3rem;
                    }
                    margin-bottom: 1em;
                }
            }
        }
    }

    @media screen and (hover: hover) {
        .nav {
            &__list {
                &__item {
                    &__link {
                        transition: all .3s;
                        &:hover {
                            letter-spacing: 0.5em;
                            font-weight: 400;
                            position: relative;

                            &::after {
                                content:attr(title);
                                position: absolute;
                                top: 0;
                                left: 0;
                                bottom: 0;
                                font-weight: 400;
                                transform: scale(2);
                                opacity: .2;
                            }
                        }

                    }
                }
            }
        }
    }

    @media screen and (min-width: 900px) {
        .nav {
            &[data-hide] {
                transition: all 1s;
            }

            &[data-hide="in"] {
                transform: translate(0);


            }

            &[data-hide="out"] {
                transform: translate(100%);
            }
        }
    }
</style>


