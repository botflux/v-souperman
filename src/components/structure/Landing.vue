<template>
    <section class="landing">
        <slot />
    </section>
</template>

<script>
export default {
    props: {
        background: String,
    },
}
</script>


<style lang="scss">
    :root {
        --landing-padding: 8px;
        --landing-margin: 8px;
    }

    .landing {
        background: #FC720EBB;
        min-height: calc(100vh - var(--landing-margin) * 2 - var(--landing-padding) * 2);

        margin: var(--landing-margin);
        padding: var(--landing-padding);
    }

    @media screen and (min-width: 600px) {
        :root {
        --landing-padding: 64px;
        --landing-margin: 32px;
        }
    }
</style>

