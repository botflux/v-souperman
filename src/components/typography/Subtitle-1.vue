<template>
    <p class="subtitle__1">
        <slot />
    </p>
</template>

<style lang="scss">
    .subtitle__1 {
        font-size: 20px;
        font-weight: 100;
        text-transform: lowercase;
        margin: 0;
    }

    @media screen and (min-width: 600px) {
        .subtitle__1 {
            font-size: 30px;
        }
    }

    @media screen and (min-width: 900px) {
        .subtitle__1 {
            font-size: 36px;
        }
    }

    @media screen and (min-width: 1200px) {
        .subtitle__1 {
            font-size: 45px;
        }
    }
</style>

