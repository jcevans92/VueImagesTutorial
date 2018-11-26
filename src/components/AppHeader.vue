<template>
    <div class="ui secondary pointing menu">
        <a class="active item" href="/">
            Image Storage
        </a>
        <div class="right menu">
            <a class="ui item" href="#" @click="login">
                Login
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'; // maps actions from modules

export default {
    name: 'Appheader',
    methods: {
        ...mapActions(['login'])
    } 
};
</script>

<style scoped>

</style>


