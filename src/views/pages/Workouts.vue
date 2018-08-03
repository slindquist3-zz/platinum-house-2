<template>
  <div class="workouts">
    <div class="container">
      <filter-component ref="filter"></filter-component>
      <div class="columns">
        <div id="video-column" class="column is-two-thirds" v-if="!($mq.tablet && category === 'view_all')">
          <video-component v-bind:url="setUrl" v-bind:title="setTitle" v-bind:description="setDescription"></video-component>
        </div>
        <div id="playlist-column" class="column is-one-third">
          <playlist-component></playlist-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var images = require.context('@/assets/img/thumbnails/', false, /\.png$/);

import VideoComponent from '@/components/content/workouts/Video.vue';
import ButtonComponent from '@/components/shared/Button.vue';
import IconComponent from '@/components/shared/Icon.vue';
import PlaylistComponent from '@/components/content/workouts/Playlist.vue';
import FilterComponent from '@/components/content/workouts/Filter.vue';
import { EventBus } from '../../event-bus.js';

export default {
  name: 'Workouts',
  components: {
    VideoComponent,
    ButtonComponent,
    IconComponent,
    PlaylistComponent,
    FilterComponent
  },
  data() {
    return {
      height: '200px',
      activeButton: 'view-all',
      url: 'https://www.youtube.com/embed/5NcSuEGGx4s',
      title: 'MIKE MONROIG: 10&#8209;MINUTE CARDIO',
      description: 'Back-to-back rounds of jogging and bodyweight exercises elevate your heart rate.',
      category: 'view_all'
    };
  },
  computed: {
    computedHeight: function() {
      return this.height;
    },
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
    },
    setCategory: {
      get: function() {
        return this.category;
      },
      set: function(newValue) {
        this.category = newValue;
      }
    }
  },
  $refs: {
    filter: HTMLElement
  },
  mounted: function() {
    setTimeout(function() {
      window.addEventListener('resize', this.handleResize);
      window.dispatchEvent(new Event('resize'));
    }, 300);
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
    EventBus.$on('filter-clicked', filter => {
      if (filter) {
        this.setCategory = filter;
      }
    });
  },
  methods: {
    handleResize(event) {
      if (this.$refs.video) {
        this.height = this.$refs.video.clientHeight + 'px';
      }
    },
    imgUrl: function(path) {
      return images('./' + path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../assets/sass/colors.scss';

.container {
  @media screen and (max-width: $desktop) {
    max-width: 90%;
    width: 90%;
  }
  .button {
    border-radius: 4px;
    padding-left: 1em;
    padding-right: 1em;
    @media screen and (max-width: $tablet) {
      width: 100%;
    }
    &.is-primary.is-active {
      background: $darkGray;
    }
  }

  .columns {
    padding: 25px 0;
    position: relative;
    .column {
      &#video-column {
        flex: 0 0 66.6666%;
        display: flex;
      }
      &#playlist-column {
        flex: 0 0 33.3333%;
        position: absolute;
        left: 66.6666%;
        top: 0;
        bottom: 0;
        right: 0;
        overflow: auto;
        margin: 25px 0;
        @media screen and (max-width: $tablet) {
          position: relative;
          left: 0;
          margin-top: 0;
        }
      }
    }
  }
}
</style>
