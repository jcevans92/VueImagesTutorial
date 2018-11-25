<template>
  <div>
    <AppHeader></AppHeader>
  </div>
</template>


<script>
import AppHeader from './components/AppHeader'

const CLIENT_ID = 'abe0913227269ed';
const CLIENT_SECRET = 'fbbd8e194ca86ba5dbd025234bb602192d2b3e6c';

export default {
  name: 'App',
  components: {
    AppHeader
  } 
};
</script>

<style scoped>

</style>
