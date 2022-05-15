export default {
    getLoginStatus(context,data){
        // context.$fireModule.auth().onAuthStateChanged(function(user) {
        //     if (user) {
        //         // context.app.router.push('/profile')
        //         return user
        //     }else{
        //         return 'inexistente'
        //     }
        // });
        return this.$fireModule.auth()
    }
}