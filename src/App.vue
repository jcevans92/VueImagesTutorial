<template>
  <div>
    <AppHeader></AppHeader>
    <div class="ui container">
      <router-view></router-view> <!-- When vue-router matches a route, puts the component here -->
    </div>
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
