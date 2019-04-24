<template>
    <section class="presse">
        <landing class="presse__landing">
            <subtitle-1>Affiche</subtitle-1>
            <a href="https://thawing-mountain-46939.herokuapp.com/presse/affiche" class="presse__button" target="_blank" rel="noopener">Voir l'affiche</a>
            <subtitle-1>Dossier de presse</subtitle-1>
            <a href="https://thawing-mountain-46939.herokuapp.com/presse/dossier" class="presse__button" target="_blank" rel="noopener">Voir le dossier de presse</a>
        </landing>
    </section>
</template>

<script>
import Landing from '../components/structure/Landing'

export default {
    components: {
        Landing
    }
}
</script>

<style lang="scss">
    .presse {
        &__button {
            background: black;
            margin: 0 auto;
            padding: 0.7em 1.4em;
            color: var(--color-primary);
            text-decoration: none;
            letter-spacing: 0.2em;
            text-transform: uppercase;

            margin-top: 2em;
        }

        &__landing {
            display: grid;
            align-content: center;
            justify-content: center;
            text-align: center;
        }
    }
</style>
