<template>
    <div class="group">
        <label :for="labelFor" class="group__label" :data-focused="isFocus ? 'out' : 'in'">{{ label }}</label>
        <component :is="tag" :type="inputType" :id="labelFor" @focus="setFocused(true)" @blur="setFocused(false)"></component>
    </div>
</template>

<script>
export default {
    props: {
        labelFor: String,
        label: String,
        inputType: {
            type: String,
            default: 'text'
        },
        tag: {
            type: String,
            default: 'input'
        }
    },
    data () {
        return {
            focused: false,
        }
    },
    computed: {
        isFocus () {
            return (
                this.focused
            )
        }
    },
    methods: {
        setFocused (b) {
            this.focused = b
        },
    },
}
</script>

<style lang="scss">
    .group {
        margin: 1em 0 2em 0;

        & input, & textarea {
            display: block;

            border: 0;
            padding: 1em 1.5em;

            outline: none;

            background: #00000000;
            border-bottom: 1px solid var(--color-primary);
            width: 100%;
            box-sizing: border-box;
        }

        &__label {
            display: block;
            text-transform: uppercase;
            font-weight: 900;
            letter-spacing: 0.8em;
            transition: all .3s;

            &[data-focused="in"]:not(:empty) {
                transform: translate(1em, calc(1.5em + .5rem));
            }

            &[data-focused="out"] {
                transform: translate(0, 0);
                letter-spacing: 0;
            }
        }
    }

    @media screen and (min-width: 600px) {
        .group {
            & input, textarea {
                font-size: 1.1rem;
            }

            &__label {
                &[data-focused="in"]:not(:empty) {
                    transform: translate(1em, calc(1.5em + .85rem));
                }
            }
        }
    }
</style>


