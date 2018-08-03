<template>
  <li><span>Week {{week}}:</span>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'WeekComponent',
  props: ['week']
};
</script>

<style lang="scss" scoped>
@import '../../../assets/sass/colors.scss';

.classlist-body {
  .container {
    background: $lightGray;
  }
}

.columns {
  justify-content: space-between;
}

.column {
  &.is-three-fifths {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-right: 1px solid $medGray;
    @media screen and (max-width: 769px) {
      border-right: none;
    }
    img {
      max-width: 500px;
      width: 80%;
      @media screen and (max-width: 769px) {
        max-width: 400px;
        padding-bottom: 30px;
      }
    }
    .button {
      background: $blue;
      color: $white;
      padding-left: 4em;
      padding-right: 4em;
    }
  }
  &.is-one-third {
    @media screen and (max-width: 900px) {
      width: 38%;
    }
    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }
}
.schedule {
  @media screen and (max-width: 769px) {
    padding: 25px 0;
    display: flex;
    justify-content: center;
  }
}
</style>
