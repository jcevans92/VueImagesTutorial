<template>
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view> <!-- When vue-router matches a route, puts the component here -->
  </div>
</template>


<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  } 
};
</script>

<style scoped>

</style>
