let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectColor: ''
        }
    },
    computed: {
        purple_class() {
            return { purple: this.isPurple };
        }
    }
}).mount('#app')