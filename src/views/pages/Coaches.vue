<template>
  <div class="coaches">
    <section-component page="coaches-page">
      Equinox Personal Training reaches its peak with Tier X, the world's most advanced health and wellness coaching. Powered by behavior training, our holistic approach transforms how you move, fuel, and recharge as a whole. And now, via Platform X, these coaches are accessible anytime, anywhere.
    </section-component>
    <section-component>
      <div class="title is-uppercase has-text-centered">Meet Your Tier X Coaches</div>
    </section-component>
    <coach-component
      v-for="(coach, $index) in $store.state.coaches_page.coaches"
      v-bind:name="coach.name"
      v-bind:image="coach.image"
      v-bind:bio="coach.bio"
      v-bind:social="coach.social"
      v-bind:handle="coach.handle"
      v-bind:flipped="$index % 2 === 1"
      :key="coach.id">
      <span slot="bio" class="bio-text">
        {{coach.bio}}
        <a v-bind:href=coach.social class="social">{{coach.handle}}</a>.
      </span>
    </coach-component>
  </div>
</template>

<script>
import SectionComponent from '@/components/content/Section.vue';
import CoachComponent from '@/components/content/coaches/Coach.vue';

export default {
  name: 'Coaches',
  components: { SectionComponent, CoachComponent }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../assets/sass/colors.scss';

.coaches {
  .container {
    .title {
      @media screen and (max-width: $tablet) {
        font-size: 4.5vw;
      }
    }
  }
}
</style>
