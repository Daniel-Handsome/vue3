<template>
  <button type="button" @click="agechage()">updata age</button>
  <p>my age : {{ age }}</p>
</template>

<script>
export default {
    name:'User',
    props:{
        age:{
            type:Number,
            validator(value){
               return  value < 130
            }
        }
    },
    emits:['age-change'],
    methods:{
        agechage(){
            this.$emit('age-change',3)
        }
    }
}
</script>