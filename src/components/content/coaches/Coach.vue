<template>
  <div class="section container coach">
    <div v-bind:class="{'is-flipped': flipped, 'columns': true}">
      <picture-component>
        <img v-bind:src="imgUrl(image)" />
      </picture-component>

      <bio-component>
        <div class="name is-uppercase"><b>{{name}}</b></div>
        <slot name="bio"></slot>
      </bio-component>
    </div>
  </div>
</template>

<script>
var images = require.context('@/assets/img/coaches/', false, /\.jpg$/);

import PictureComponent from './Picture.vue';
import BioComponent from './Bio.vue';

export default {
  name: 'CoachComponent',
  components: { PictureComponent, BioComponent },
  props: ['name', 'bio', 'image', 'social', 'handle', 'flipped'],
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../../assets/sass/colors.scss';

.coach {
  &.section {
    padding: 2rem 1.5rem;
  }
  .columns {
    display: flex;
    justify-content: space-between;
    &.is-flipped {
      flex-direction: row-reverse;
      text-align: right;

      @media screen and (max-width: $tablet) {
        text-align: left;
      }
    }

    @media screen and (max-width: $tablet) {
      display: block;
    }

    .column {
      &.is-flex {
        flex-direction: column;
        justify-content: center;

        .name {
          padding-bottom: 15px;
        }
      }
      &.is-one-quarter {
        width: 25%;
        @media screen and (max-width: $tablet) {
          display: flex;
          flex-basis: auto;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
      }
      &.is-three-quarters {
        width: 70%;
        @media screen and (max-width: $tablet) {
          display: flex;
          flex-basis: auto;
          width: 100%;
        }
      }
    }

    img {
      border-radius: 50%;
      @media screen and (max-width: $tablet) {
        max-width: 250px;
        width: 100%;
        // min-width: 150px;
      }
    }
  }
}
</style>
