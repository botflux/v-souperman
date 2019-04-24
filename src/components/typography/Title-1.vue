<template>
    <h1 class="title__1">
        <slot />
    </h1>
</template>

<style lang="scss">
    .title__1 {
        font-size: 35px;
        letter-spacing: 0.22em;
        font-weight: 900;
        text-transform: uppercase;
    }

    @media screen and (min-width: 600px) {
        .title__1 {
            font-size: 60px;
        }
    }

    @media screen and (min-width: 900px) {
        .title__1 {
            font-size: 72px;
        }
    }

    @media screen and (min-width: 1200px) {
        .title__1 {
            font-size: 100px;
        }   
    }
</style>

