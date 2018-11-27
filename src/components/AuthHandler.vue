<template>
    <div>
        Please wait...
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AuthHandler',
    methods: {
        ...mapActions(['finalizeLogin'])
    },
    created() {
        // Call action with hash from URL before page is rendered
        this.finalizeLogin(window.location.hash);
    }
};
</script>

