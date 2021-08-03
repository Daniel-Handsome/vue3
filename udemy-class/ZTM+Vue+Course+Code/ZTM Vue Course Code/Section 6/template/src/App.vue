<template>
  <app-form>
    <template v-slot:help>
      <p>test to create for template</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </template>
    <template v-slot:buttons>
      <button>按我</button>
    </template>
  </app-form>
  <app-form>
    <template v-slot:help>
      123123
    </template>
    <template v-slot:fields>
     12313123
    </template>
    <template v-slot:buttons>
    </template>
  </app-form>
</template>

<script>
import AppForm from './components/form.vue'
export default {
  name: 'App',
  components:{
    AppForm,
  }
}
</script>

