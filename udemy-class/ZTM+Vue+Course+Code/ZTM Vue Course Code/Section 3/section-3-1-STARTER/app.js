const vm = Vue.createApp({
    data() {
        return {
            perspective: 200,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    },
    computed: {
        box() {
            return {

                //transform會覆蓋所以這樣寫，另外有舊式true了
                transform: `
                perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
                `
            }

        }
    },
    methods: {
        reset() {
            this.perspective = 100,
                this.rotateX = 0,
                this.rotateY = 0,
                this.rotateZ = 0
        },
        copy() {
            const el = document.createElement('textarea');
            el.style.position = 'absolute';
            el.style.left = -99999999;
            //textarea要String
            el.value = `transform:${this.box.transform}`;
            //跟windos一樣.就好不用select
            document.body.appendChild(el);
            //建立好在select
            el.select();
            //都較document了代表要在畫面(他不用指定)
            document.execCommand('copy');
            el.remove();
        }
    }
}).mount('#app')