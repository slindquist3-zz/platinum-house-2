<template>
  <div class="column is-one-quarter">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PictureComponent'
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';

.promo {
  img {
    display: block;
    height: 200px;
    width: auto;
    margin: auto;
    @media screen and (max-width: $tablet) {
      width: 90%;
      height: auto;
    }
  }
}
</style>
