<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import {playlistMixin} from "@/mixins/mixin1.js"
export default {
  name: 'about',
  mixins:[playlistMixin],

  mounted: function() {
    this.handlePlaylist([1,2,3])
  },
  methods: {


  },
}
</script>
