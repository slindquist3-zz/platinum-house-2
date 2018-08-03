<template>
  <div v-bind:id="id" class="column" @click="filterVideos(filter, $event)">
    <div v-bind:class="{'is-active': active, 'icon-container': true}">
      <div class="icon-img" v-bind:style="{ backgroundImage: 'url(' + require(`@/assets/img/icons/mike_${filter}.png`) + ')' }">
        <!-- <img v-bind:src="require(`@/assets/img/thumbnails/${category}/${instructor}_${category}.png`)" /> -->
        <img src="@/assets/img/icons/mike_cardio.png" style="visibility: hidden;" />
      </div>
      <div class="icon-overlay"></div>
    </div>
    <div class="icon-label is-uppercase">
      <slot></slot>
    </div>
  </div>
</template>

<script>
var images = require.context('@/assets/img/icons/', false, /\.png$/);
import { EventBus } from '../../event-bus.js';
import store from '../../store/store.js';

export default {
  name: 'IconComponent',
  store: store,
  props: ['id', 'image', 'active', 'filter'],
  data() {
    return {
      activeIcon: 'view_all',
      myFilter: ''
    };
  },
  methods: {
    filterVideos: function(videoFilter, event) {
      this.toggleIcon(event);
      var store = this.$store;

      var videos;
      if (videoFilter === 'view_all') {
        videos = this.$store.state.workouts_page.videos;
        EventBus.$emit('filter-clicked', videoFilter);
        var obj = {
          url: store.state.workouts_page.videos[0].url,
          title: store.state.workouts_page.videos[0].title,
          description: store.state.workouts_page.videos[0].description
        };
        EventBus.$emit('thumbnail-clicked', obj);
      } else {
        videos = this.$store.state.workouts_page.videos.filter(function(s) {
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
    toggleIcon: function(event) {
      var currentActive = document.querySelector('.icon-container.is-active');
      if (currentActive) currentActive.classList.remove('is-active');

      var el = event.target;
      var cls = 'icon-container';

      if (el.classList.contains('column')) {
        el = el.childNodes[0];
      } else if (el.classList.contains('icon-label')) {
        el = el.parentElement.childNodes[0];
      } else {
        while ((el = el.parentElement) && !el.classList.contains(cls));
      }

      el.classList.add('is-active');
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

.icon-columns {
  @media screen and (max-width: $tablet) {
    display: flex;
    flex-wrap: wrap;
  }
  .column {
    position: relative;
    width: calc(100% / 6);
    max-width: 125px;
    padding: 0.75rem 0.35rem;
    @media screen and (max-width: 500px) {
      width: calc(100% / 3);
      flex-basis: auto;
    }
    cursor: pointer;
    .icon-container {
      position: relative;
      display: flex;
      flex-direction: column;
      border: 3px solid $darkGray;
      border-radius: 50%;
      .icon-img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
      }
      .icon-overlay {
        border-radius: 50%;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: $black;
        opacity: 0.5;
        transition: 0.3s opacity;
      }
      &.is-active {
        border: 3px solid $darkGray;
        .icon-overlay {
          opacity: 0;
        }
      }
    }
    .icon-label {
      // position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      text-align: center;
      margin-top: 15px;
      line-height: 1.1em;
      font-size: 1.7vw;
      @media screen and (max-width: 600px) {
        font-size: 2vw;
      }
      @media screen and (max-width: 500px) {
        font-size: 3vw;
      }
    }
    &:hover {
      .icon-overlay {
        opacity: 0.2;
      }
    }
  }
}
</style>
