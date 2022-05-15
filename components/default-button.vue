<template lang="pug">
    input(class="btn-default" :type="typeButton" :value="valueButton" @click.prevent="event" :disabled="disabledButton")
</template>
<script>
export default {
    name:'default-button',
    props: ['valueButton','function','event','typeButton','disabledButton'],
}
</script>
<style scoped lang="stylus">
    .btn-default
        background-color #FA9C3B
        padding 5px 50px
        color white
        font-size 1rem
        border-radius: 6px
        transition: 0.3s ease all
        cursor pointer
        &:hover
            background-color #AD5F10
        &:disabled
            background-color #63584C
            filter grayscale(1)
</style>
