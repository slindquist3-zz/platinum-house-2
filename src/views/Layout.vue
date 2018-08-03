<template>
  <div id="app-layout">
    <navigation-component></navigation-component>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavigationComponent from '../components/navigation/Navigation.vue';

export default {
  name: 'Layout',
  components: { NavigationComponent }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';

.main-content {
  margin-top: 124px;
  @media screen and (max-width: $tablet) {
    margin-top: 100px;
  }
  @media screen and (max-width: $desktop) {
  }
}
</style>
