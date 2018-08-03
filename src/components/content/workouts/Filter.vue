<template>
  <div class="filter-container">
    <div class="columns button-columns is-hidden-mobile">
      <div class="column">
        <button-component id="button-view-all" filter="view_all" type="is-outlined is-active">View All</button-component>
      </div>
      <div class="column">
        <button-component id="button-cardio" filter="cardio" type="is-outlined">Cardio</button-component>
      </div>
      <div class="column">
        <button-component id="button-agility" filter="power_agility" type="is-outlined">Power + Agility</button-component>
      </div>
      <div class="column">
        <button-component id="button-strength" filter="strength" type="is-outlined">Strength</button-component>
      </div>
      <div class="column">
        <button-component id="button-mobility" filter="mobility" type="is-outlined">Mobility</button-component>
      </div>
      <div class="column">
        <button-component id="button-conditioning" filter="conditioning" type="is-outlined">Conditioning</button-component>
      </div>
    </div>
    <div class="columns icon-columns is-hidden-tablet is-multiline">
      <icon-component id="icon-view-all" active=true filter="view_all">View all</icon-component>
      <icon-component id="icon-cardio" filter="cardio">Cardio</icon-component>
      <icon-component id="icon-agility" filter="power_agility">Power + Agility</icon-component>
      <icon-component id="icon-strength" filter="strength">Strength</icon-component>
      <icon-component id="icon-mobility" filter="mobility">Mobility</icon-component>
      <icon-component id="icon-conditioning" filter="conditioning">Conditioning</icon-component>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../../shared/Button.vue';
import IconComponent from '../../shared/Icon.vue';

export default {
  name: 'FilterComponent',
  components: { ButtonComponent, IconComponent },
  props: ['link', 'type', 'location']
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../../assets/sass/colors.scss';

.filter-container {
  padding-top: 25px;
  .columns {
    &.icon-columns {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: $tablet) {
        flex-wrap: wrap;
      }
    }
    &.button-columns {
      margin-top: 0;
      margin-bottom: 0;
      .column {
        @media screen and (max-width: $desktop) {
          padding: 0.5rem;
        }
      }
    }
  }
}
</style>
