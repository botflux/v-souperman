<template>
    <footer>
        <b-row class="footer__row">
            <newsletter class="footer__newsletter" />
            <column class="footer__info">
                <title-2 class="footer__info__title">Tenez vous au courant</title-2>
                <b-text class="footer__info__text">Ne ratez pas notre passage chez vous</b-text>
            </column>
            <column class="footer__nav">
                <title-2>Navigation</title-2>
                <ul class="footer__nav__list">
                    <li class="footer__nav__list__item">
                        <router-link to="/" class="footer__nav__list__item__link">Accueil</router-link>
                    </li>
                    <li class="footer__nav__list__item">
                        <router-link to="/membre" class="footer__nav__list__item__link">Membres</router-link>
                    </li>
                    <li class="footer__nav__list__item">
                        <router-link to="/agenda" class="footer__nav__list__item__link">Agenda</router-link>
                    </li>
                    <li class="footer__nav__list__item">
                        <router-link to="/contact" class="footer__nav__list__item__link">Contact</router-link>
                    </li>
                    <li class="footer__nav__list__item">
                        <router-link to="/presse" class="footer__nav__list__item__link">Presse</router-link>
                    </li>
                    <li class="footer__nav__list__item">
                        <router-link to="/mentions-legales" class="footer__nav__list__item__link">Mentions légales</router-link>
                    </li>
                </ul>
            </column>
        </b-row>
    </footer>
</template>

<script>
import Newsletter from './Newsletter'

export default {
    components: {
        'newsletter': Newsletter
    }
}
</script>

<style lang="scss">
    
    .footer {
        &__row {
            flex-direction: column;
        }

        &__info {
            text-align: center;
            background: #FC720EBB;
            padding: 10%;
            box-sizing: border-box;
        }

        &__nav {
            text-align: center;
            background: #FC720E;
            padding: 10%;
            box-sizing: border-box;
        }
    }

    .footer__nav__list {
        margin: 0;
        padding: 0;
        
        &__item {
            list-style: none;

            &__link {
                text-decoration: none;
                margin-bottom: .5em;
                font-size: 1.2rem;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                display: inline-block;
                color: #000;
            }
        }
    }
    
    @media screen and (min-width: 600px) {
        .footer {
            &__row {
                flex-direction: row;
                flex-wrap: wrap;
            }

            &__newsletter {
                width: 100%;
                padding: 10% 20%;
            }

            &__info {
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 3% 10%;
                box-sizing: border-box;
            }

            &__nav {
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
            }
        }
    }
    
    @media screen and (min-width: 1500px) {
        .footer__row {
            flex-direction: row-reverse;
        }    

        .footer {
            &__newsletter {
                width: 50%;
                padding: 5% 2%;
            }

            &__info {
                width: 25%;
                padding: 5% 2%;
            }

            &__nav {
                width: 25%;
                padding: 5% 2%;
            }
        }

        
    }
</style>





