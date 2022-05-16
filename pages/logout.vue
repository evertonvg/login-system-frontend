<template lang="pug">
div
</template>
<script>
export default {
    name: 'Logout',
    async mounted(){
        
        await this.$auth.logout()
        this.$store.dispatch('warning/setWarning','Volte novamente!')
        this.$router.push('/login')

    }
}
</script>