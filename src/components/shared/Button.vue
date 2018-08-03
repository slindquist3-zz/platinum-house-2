<template>
  <div v-if="location === 'internal'">
    <slot></slot>
  </div>
  <div v-else-if="filter">
    <a @click="filterVideos(filter, $event)" v-bind:id="id" v-bind:class="['button', 'is-uppercase', type]">
      <slot></slot>
    </a>
  </div>
  <div v-else>
    <a v-bind:href="link" target="_blank" v-bind:class="['button', 'is-uppercase', type]">
      <slot></slot>
    </a>
  </div>
</template>

<script>
import { EventBus } from '../../event-bus.js';
import store from '../../store/store.js';

export default {
  name: 'ButtonComponent',
  store: store,
  props: ['link', 'type', 'location', 'filter', 'id'],
  data() {
    return {
      activeButton: 'view_all',
      myFilter: ''
    };
  },
  methods: {
    filterVideos: function(videoFilter, event) {
      this.toggleButton(event);
      var store = this.$store;

      var videos;
      if (videoFilter === 'view_all') {
        videos = store.state.workouts_page.videos;
        EventBus.$emit('filter-clicked', videoFilter);
        var obj = {
          url: store.state.workouts_page.videos[0].url,
          title: store.state.workouts_page.videos[0].title,
          description: store.state.workouts_page.videos[0].description
        };
        EventBus.$emit('thumbnail-clicked', obj);
      } else {
        videos = store.state.workouts_page.videos.filter(function(s) {
          if (s.category.indexOf(videoFilter) > -1) {
            EventBus.$emit('filter-clicked', s.category);
            var obj;
            for (var i = 0; i < store.state.workouts_page.videos.length; i++) {
              if (store.state.workouts_page.videos[i].category === s.category) {
                obj = {
                  url: store.state.workouts_page.videos[i].url,
                  title: store.state.workouts_page.videos[i].title,
                  description: store.state.workouts_page.videos[i].description
                };
              }
            }
            EventBus.$emit('thumbnail-clicked', obj);
            return s.category.indexOf(videoFilter) > -1;
          }
        });
      }
    },
    toggleButton: function(event) {
      var currentActive = document.querySelector('.button.is-active');
      if (currentActive) currentActive.classList.remove('is-active');

      var el = event.target;
      el.classList.add('is-active');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../assets/sass/colors.scss';

.button {
  width: 100%;
  border-radius: 0;
  @media screen and (max-width: $widescreen) {
    font-size: 14px;
  }
  &.is-outlined {
    background: transparent;
    border-color: $darkGray;
    color: $darkGray;
    &.is-white {
      border-color: $white;
      color: $white;
      transition: 0.3s all;
      &:hover {
        color: $darkGray;
      }
    }
    &.is-active {
      background: $darkGray;
      border-color: transparent;
      color: $white;
    }
  }
  &.is-primary {
    background: $blue;
    transition: 0.3s opacity;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
