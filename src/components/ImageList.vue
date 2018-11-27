<template>
    <div>
        <img v-for="image in getAllImages" :src="image.link" :key="image.id" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList' ,
  computed: {
      ...mapGetters(['getAllImages'])
  },
  methods: {
      ...mapActions(['fetchImages'])
  },
  created() {
      // Get Image List from Imgur
    this.fetchImages();
  } 
};
</script>

