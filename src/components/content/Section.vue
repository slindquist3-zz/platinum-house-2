<template>
  <section class="section container">
    <div v-bind:class="[page]">
      <div class="description">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionComponent',
  components: {},
  props: ['page', 'type', 'text']
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../assets/sass/colors.scss';

.description {
  text-align: center;
  @media screen and (max-width: $tablet) {
    font-size: 14px;
  }
}
</style>
