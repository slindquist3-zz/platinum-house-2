<template>
  <div class="playlist-container">
    <div class="playlist-header">
      <span id="total-videos" class="is-uppercase">
      Total: {{$store.state.workouts_page.videos.length}} Videos
      </span>
    </div>
    <hr v-if="!($mq.tablet && category === 'view_all')"/>
    <div class="playlist-body" v-if="$mq.tablet && category === 'view_all'" v-onmedia.tablet="renderPlaylist">
      <video-component
      v-for="video in $store.state.workouts_page.videos"
      v-bind:key="video.id"
      v-bind:title="video.title"
      v-bind:description="video.description"
      v-bind:category="video.category"
      v-bind:instructor="video.coach"
      v-bind:url="video.url"
      v-bind:viewAll="true">
      </video-component>
    </div>
    <div class="playlist-body" v-else-if="$mq.tablet && category !== 'view_all'" v-onmedia.tablet="renderPlaylist">
      <thumbnail-component
      v-if="video.category === category"
      v-for="video in $store.state.workouts_page.videos"
      v-bind:key="video.id"
      v-bind:title="video.title"
      v-bind:description="video.description"
      v-bind:category="video.category"
      v-bind:instructor="video.coach"
      v-bind:url="video.url">
      </thumbnail-component>
    </div>
    <div class="playlist-body" v-else v-onmedia:not.tablet="renderPlaylist">
      <thumbnail-component
      v-if="video.category === category || category === 'view_all'"
      v-for="video in $store.state.workouts_page.videos"
      v-bind:key="video.id"
      v-bind:title="video.title"
      v-bind:description="video.description"
      v-bind:category="video.category"
      v-bind:instructor="video.coach"
      v-bind:url="video.url">
      </thumbnail-component>
    </div>
  </div>
</template>

<script>
var images = require.context('@/assets/img/thumbnails/', false, /\.png$/);
import ThumbnailComponent from './Thumbnail.vue';
import VideoComponent from './Video.vue';
import { EventBus } from '../../../event-bus.js';

import store from '../../../store/store.js';

export default {
  name: 'PlaylistComponent',
  store: store,
  props: ['id', 'label', 'image', 'active'],
  components: { ThumbnailComponent, VideoComponent },
  data() {
    return {
      category: 'view_all'
    };
  },
  mounted() {
    EventBus.$on('filter-clicked', filter => {
      if (filter) {
        this.setCategory = filter;
      }
    });
  },
  computed: {
    setCategory: {
      get: function() {
        return this.category;
      },
      set: function(newValue) {
        this.category = newValue;
      }
    }
  },
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    },
    renderPlaylist(alias, matches, init = false) {
      if (alias === 'tablet' && matches) {
        if (this.category === 'view_all') {
          console.log('specialty playlist');
        } else {
          console.log('other');
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../../assets/sass/colors.scss';

.playlist-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: $lightGray;
  padding: 12px 0 12px 12px;
  @media screen and (max-width: $tablet) {
    display: block;
    background: transparent;
    padding: 0;
  }
  hr {
    width: 100%;
    margin: 0.5rem 0;
    background: $medGray;
    height: 1px;
  }
  .playlist-header {
    #total-videos {
      display: block;
      @media screen and (max-width: $tablet) {
        display: none;
      }
    }
  }
  .playlist-body {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    text-align: left;
    padding-right: 15px;
    margin-top: 12px;
    @media screen and (max-width: $tablet) {
      overflow-y: hidden;
      padding: 0;
      margin: 0;
    }
    .playlist-video {
      display: none;
      height: 100px;
      &.visible {
        display: block;
      }
      .columns {
        height: 100%;
        .video-thumbnail {
          padding-right: 12px;
          justify-content: center;
          align-items: center;
          img {
            height: auto;
            max-width: 100%;
            max-height: 70px;
          }
        }
        .video-info {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          @media screen and (max-width: $desktop) {
            font-size: 14px;
          }
          .video-title {
            line-height: 1.1em;
          }
        }
      }
    }
  }
}
</style>
