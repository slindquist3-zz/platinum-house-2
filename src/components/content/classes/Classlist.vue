<template>
  <div class="schedule">
    <ul>
      <week-component week="1">
        <li><span>Friday 7/27 10:30 AM</span></li>
        <li><span>Saturday 7/28 11:45 AM</span></li>
      </week-component>
      <week-component week="2">
        <li><span>Friday 8/3 10:30 AM</span></li>
        <li><span>Friday 8/3 11:30 AM</span></li>
        <li><span>Saturday 8/4 11:30 AM</span></li>
      </week-component>
      <week-component week="3">
        <li><span>Friday 8/10 10:30 AM</span></li>
        <li><span>Saturday 8/11 11:30 AM</span></li>
      </week-component>
      <week-component week="4">
        <li><span>Friday 8/17 10:30 AM</span></li>
        <li><span>Saturday 8/18 11:30 AM</span></li>
      </week-component>
      <week-component week="5">
        <li><span>Friday 8/24 10:30 AM</span></li>
        <li><span>Friday 8/24 11:30 AM</span></li>
        <li><span>Saturday 8/25 11:30 AM</span></li>
      </week-component>
    </ul>
  </div>
</template>

<script>
import WeekComponent from './Week.vue';

export default {
  name: 'ClasslistComponent',
  components: { WeekComponent }
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
