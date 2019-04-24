<template>
    <div class="img__wrapper">
        <slot />
    </div>
</template>

<style lang="scss">
    .img__wrapper {
        &__img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
</style>




