<template>
    <div class="row">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'BaseRow'
}
</script>


<style lang="scss">
    .row {
        display: flex;
        width: 100%;
        box-sizing: border-box;
    }
</style>

