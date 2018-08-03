<template>
  <div class="columns" @click="loadVideo()">
    <div class="video-thumbnail column is-half">
      <a class="thumbnail-link">
        <img v-bind:src="require(`@/assets/img/thumbnails/${category}/${instructor}_${category}.png`)" />
      </a>
    </div>
    <div class="video-info column is-half">
      <div class="video-title is-uppercase">
        <a class="title-link">
          <b v-html="title"></b>
        </a>
      </div>
      <div v-if="playing" class="is-playing">Playing now</div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../../event-bus.js';
import store from '../../../store/store.js';

export default {
  name: 'ThumbnailComponent',
  store: store,
  props: ['url', 'title', 'description', 'category', 'instructor', 'playing'],
  data() {
    return {
      activeButton: 'view_all',
      myFilter: ''
    };
  },
  methods: {
    loadVideo: function() {
      var obj = {
        url: this.url,
        title: this.title,
        description: this.description
      };
      EventBus.$emit('thumbnail-clicked', obj);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../../assets/sass/colors.scss';

.columns {
  @media screen and (max-width: $tablet) {
    display: flex;
    margin-top: 0;
  }
  .video-info {
    .video-title {
      .title-link {
        color: $darkGray;
      }
    }
  }
}
</style>
