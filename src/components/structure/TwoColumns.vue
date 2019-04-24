<template>
    <div class="two-columns" :class="{ 'two-columns--reversed' : reversed }">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        reversed: false
    }
}
</script>


<style lang="scss">
    .two-columns {
        display: flex;
        width: 100%;
        box-sizing: border-box;

        &--reversed {
            flex-direction: row-reverse;
        }
    }
</style>
