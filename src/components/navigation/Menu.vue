<template>
  <div class="menu tabs is-fullwidth is-uppercase">
    <ul>
      <li>
        <router-link to="/">About</router-link>
      </li>
      <li>
        <router-link to="/workouts">Workouts</router-link>
      </li>
      <li>
        <router-link to="/classes">Classes</router-link>
      </li>
      <li>
        <router-link to="/coaches">Coaches</router-link>
      </li>
      <!-- <li>
        <router-link to="/textatrainer">Text-A-Trainer</router-link>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent'
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../assets/sass/colors.scss';

.menu {
  background: $lightGray;
  overflow: hidden;
  @media screen and (max-width: $tablet) {
    height: 40px;
  }
  ul {
    border-bottom-color: transparent;
    li {
      @media screen and (max-width: $tablet) {
        height: 40px;
      }
      a {
        border-bottom-width: 4px;
        border-bottom-color: transparent;
        width: 150px;
        margin: auto;
        @media screen and (max-width: $tablet) {
          width: 100%;
          height: 40px;
        }
        @media screen and (max-width: 500px) {
          width: 100%;
          font-size: 3vw;
        }
        &.router-link-exact-active {
          border-bottom-color: $blue;
        }
      }
    }
  }
}
</style>
