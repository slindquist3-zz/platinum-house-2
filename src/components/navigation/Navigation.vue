<template>
  <nav class="navbar is-fixed-top">
    <brand-component></brand-component>
        <!-- <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
        </span> -->

    <menu-component></menu-component>
  </nav>
</template>

<script>
import BrandComponent from './Brand.vue';
import MenuComponent from './Menu.vue';

export default {
  name: 'NavigationComponent',
  components: { BrandComponent, MenuComponent }
};
</script>

<style lang="scss" scoped>
.navbar {
  flex-direction: column;
}
</style>
