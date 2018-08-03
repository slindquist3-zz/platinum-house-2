<template>
  <div class="video-container">
    <div class="aspect-ratio video-wrapper">
      <iframe v-bind:src="url" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="video-info">
      <div class="video-title is-uppercase"><b v-html="title"></b></div>
      <div class="video-description" v-html="description"></div>
    </div>
    <hr v-if="$mq.tablet && viewAll"/>
  </div>
</template>

<script>
import { EventBus } from '../../../event-bus.js';

export default {
  name: 'VideoComponent',
  props: ['url', 'title', 'description', 'viewAll'],
  mounted() {
    EventBus.$on('thumbnail-clicked', obj => {
      if (obj.url) {
        this.url = obj.url;
      }
      if (obj.title) {
        this.setTitle = obj.title;
      }
      if (obj.description) {
        this.setDescription = obj.description;
      }
    });
  },
  computed: {
    setUrl: {
      get: function() {
        return this.url;
      },
      set: function(newValue) {
        this.url = newValue;
      }
    },
    setTitle: {
      get: function() {
        return this.title;
      },
      set: function(newValue) {
        this.title = newValue;
      }
    },
    setDescription: {
      get: function() {
        return this.description;
      },
      set: function(newValue) {
        this.description = newValue;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/sass/colors.scss';

.video-container {
  width: 100%;
  height: 100%;
  .aspect-ratio {
    width: 100%;
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
  .video-info {
    width: 100%;
    height: 10%;
    margin-top: 25px;
  }
  hr {
    width: 100%;
    background: $medGray;
    height: 1px;
  }
}
</style>
