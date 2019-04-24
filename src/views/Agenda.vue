<template>
    <section class="agenda">
        <agenda-item v-for="(show, i) of shows" :key="`agenda-${i}`" :name="show.name" :id="show.id" :image="show.image" :date="show.date" :place="show.place" :description="show.description"></agenda-item>
    </section>
</template>

<script>
import AgendaItem from '../components/agenda/AgendaItem'

export default {
    components: {
        AgendaItem
    },
    created () {
        fetch(`https://thawing-mountain-46939.herokuapp.com/api/animations`)
            .then(response => response.json(), rej => console.log(rej))
            .then(data => this.shows = data)
    },
    data () {
        return {
            shows: []
        }
    }
}
</script>

<style>
    @media screen and (min-width: 1500px) {
        .agenda {
            display: grid;
            grid-template-columns: auto auto;
        }
    }
</style>


