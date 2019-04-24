<template>
    <section class="contact">
        <landing class="contact__landing">
            <title-1 class="contact__title">Contact</title-1>
            <div class="contact__content">
                <b-text>
                    <a href="https://www.facebook.com/Les-Souperman-336486943659504" target="_blank" rel="noopener" class="contact__social">
                        <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
                    </a>
                    <a href="https://www.instagram.com/les_souperman/?hl=fr" target="_blank" rel="noopener" class="contact__social">
                        <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
                    </a>
                </b-text>
                <b-text class="contact__text">29 Rue du Vieux Sextier,<br> 84000 Avignon</b-text>
                <b-text class="contact__text">contact@souperman.fr</b-text>
            </div>
            <form action="#" method="post" class="contact__form">
                <form-group :label-for="'name'" label="Nom"></form-group>
                <form-group :label-for="'email'" label="Email"></form-group>
                <form-group :label-for="'message'" label="Message" tag="textarea"></form-group>
            </form>
        </landing>
    </section>
</template>

<script>
import Landing from '../components/structure/Landing'
import FormGroup from '../components/FormGroup'

export default {
    components: {
        Landing, FormGroup
    }
}
</script>


<style lang="scss">
    .contact {
        &__title {
            text-align: center;
        }

        &__content {
            text-align: center;
        }

        &__social {
            font-size: 2em;
            margin-right: 1em;
            color: #000;
        }
    }


    @media screen and (min-width: 900px) {
        .contact {
            &__landing {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: auto auto;
                grid-template-areas: "title title" "content form";
            }

            &__title {
                grid-area: title;
                text-align: left;

                margin: .5em 0;
            }

            &__content {
                grid-area: content;
                text-align: left;
            }

            &__form {
                grid-area: form;
            }
        }
    }
</style>

