<template>
    <column class="show">
        <b-img class="show__img">
            <slot name="img" />
        </b-img>

        <b-text class="show__title"><slot name="title" /></b-text>
        <b-text class="show__subtitle"><slot name="subtitle" /></b-text>
        <div class="show__link">
            <slot name="link" />
        </div>
    </column>
</template>

<style lang="scss">
    .show {
        &__title, &__subtitle, &__link {
            text-align: center;
            margin-top: 0;
            margin-bottom: 0;
        }

        &__link, &__title {
            margin-top: 1em;
        }

        &__img {
            margin: 0 auto;
            width: 50%;
            height: 230px;

            & > img, & .vue-responsive-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        margin-bottom: 3em;
    }

    @media screen and (min-width: 600px) {
        .show {
            width: 50%;
        }
    }

    @media screen and (min-width: 1200px) {
        .show {
            width: 25%;

            &__img {
                width: 80%;
            }
        }
    }
</style>
