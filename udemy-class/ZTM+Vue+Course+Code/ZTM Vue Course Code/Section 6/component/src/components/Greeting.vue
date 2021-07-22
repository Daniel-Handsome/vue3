<template>
  <p v-if="age>25">{{ msg }}</p>
  <p v-else>小於25</p>
</template>

<script>
export default {
  name:'Greeing',
  props:['age'],
  data(){
    return{
      msg:'hello world'
    }
  }
}
</script>

<style scoped lang="scss">
$color: red;
p {
  color: $color;
}
</style>
