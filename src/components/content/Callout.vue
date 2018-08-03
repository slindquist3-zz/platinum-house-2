<template>
  <div class="cta">
    <slot></slot>
  </div>
</template>

<script>
var images = require.context('@/assets/img/', false, /\.png$/);

export default {
  name: 'CalloutComponent',
  props: ['type', 'id', 'image', 'text', 'description', 'button', 'cta', 'background', 'markets'],
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';

@import '../../assets/sass/colors.scss';

.content-container {
  // width: 65%;
  margin: auto;
  width: 100%;
  // max-width: 400px;

  img {
    margin-bottom: 1rem;
  }
}
.cta.button-callout {
  background: #eeeeee;
}

.cta {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .section {
    @media screen and (max-width: $desktop) {
      width: 100%;
    }
    .card-content {
      &#experience-card-content {
        @media screen and (max-width: $desktop) {
          padding: 1.5rem 0;
        }
      }
      .title {
        &#text-a-trainer-title {
          @media screen and (max-width: $tablet) {
            font-size: 6vw;
          }
        }
      }
      img {
        width: 500px;
        @media screen and (max-width: $desktop) {
          max-width: 500px;
          width: 70vw;
        }
      }
    }
  }
  #equinox-members-only {
    @media screen and (max-width: $tablet) {
      padding-top: 15px;
    }
  }
}
</style>
