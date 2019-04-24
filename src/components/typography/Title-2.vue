<template>
    <h2 class="title__2">
        <slot />
    </h2>
</template>

<style lang="scss">
    .title__2 {
        font-size: 30px;
        text-transform: uppercase;
        font-weight: 200;
        letter-spacing: 0.22em;
    }

    @media screen and (min-width: 900px) {
        // .title__2 {
        //     font-size: 35px;
        // }
    }

    @media screen and (min-width: 1200px) {
        .title__2 {
            font-size: 35px;
        }
    }
</style>

