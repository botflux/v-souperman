<template>
    <column class="newsletter">
        <title-2 class="newsletter__title">Ne manquez plus aucun évènements</title-2>
        <div class="form-group newsletter__form-group">
            <input type="email" class="form-group__input" id="email">
            <label for="email" class="form-group__label">Email</label>
        </div>
        <button class="btn">Me tenir informer</button>
    </column>
</template>

<style lang="scss">
    .newsletter {
        background: #FC720E55;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &__title {
            text-align: center;
        }
        padding: 10%;

        &__form-group {
            width: 100%;
        }
    }

    .btn {
        border: none;
        background: var(--color-primary);
        text-transform: lowercase;
        letter-spacing: 0.2em;
        font-weight: 700;
        padding: .7em 1.4em;
    }

    .form-group {
        display: flex;
        flex-direction: column-reverse;
        margin: 1em 0 2em 0;

        &__input {
            border: 0;
            background: none;
            outline: none;

            border-bottom: 1px solid var(--color-primary);
            padding: 0.4em;
            transition: all .3s;

            &:active, &:focus {
                & ~ .form-group__label {
                    transform: translate(0, 0);
                    letter-spacing: 0.1em;
                    font-size: 0.9rem;
                    color: var(--color-primary);
                }

                border-bottom: 2px solid var(--color-primary);
            }
        }

        &__label {
            transform: translate(10px, 20px);
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 0.8em;
            transition: all .3s;
        }
    }

    @media screen and (min-width: 600px) {
        .newsletter {
            &__form-group {
                width: 80%;
            }
        }
    }

    @media screen and (min-width: 900px) {
        .newsletter {
            padding: 0 20%;
            box-sizing: border-box;
        }
    }

    @media screen and (min-width: 1200px) {
        .newsletter {
            padding: 0 5%;

            &__form-group {
                width: 100%;
            }
        }
    }
</style>

