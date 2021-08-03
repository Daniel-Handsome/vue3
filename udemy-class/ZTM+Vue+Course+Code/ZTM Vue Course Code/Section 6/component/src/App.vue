<template>
  <p>glocl</p>
  <greeting :age="age">12312323</greeting>
  <user :age="age" @age-change="udateAge"></user>
</template>

<script>
import Greeting from './components/Greeting.vue'
import User from './components/User.vue'
export default {
  name:'App',
  data(){
    return{
      age:40
    }
  },
  components:{
    Greeting,
    User
  },
  methods:{
    udateAge(num){
      this.age += num 
    },
   
  }
}
</script>

<style>
</style>