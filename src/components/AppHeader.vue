<template>
    <div class="ui secondary pointing menu">
        <a class="active item" href="/">
            Image Storage
        </a>

        <div class="right menu">
            <div class="horizontal" v-if="isLoggedIn">
                <a class="item" >
                    Galleries
                </a>
                <a class="item">
                    Upload
                </a>
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


