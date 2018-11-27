<template>
    <div class="ui secondary pointing menu">
        <router-link to="/"  class="active item" >
            Image Storage
        </router-link>

        <div class="right menu">
            <div class="horizontal" v-if="isLoggedIn">
                <router-link to="/" class="item" >
                    Galleries
                </router-link>
                <router-link to="/upload" class="item">
                    Upload
                </router-link>
                <a class="item" @click="logout">
                    Logout
                </a>
            </div>
            <a v-else class="ui item" @click="login">
                Login
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'; // maps actions from modules

export default {
    name: 'Appheader',
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    methods: {
        ...mapActions(['login', 'logout'])
    }
};
</script>

<style scoped>
.horizontal {
    display:flex;
    flex-direction: row;
}
</style>


