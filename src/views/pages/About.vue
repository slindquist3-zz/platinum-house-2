<template>
  <div class="main">
    <hero-component
      v-for="(hero) in $store.state.about_page.heroes"
      v-bind:text="hero.text"
      v-bind:image="hero.image"
      v-bind:buttonText="hero.buttonText"
      v-bind:buttonLink="hero.buttonLink"
      v-bind:calloutImage="hero.calloutImage"
      v-bind:bottomImage="hero.bottomImage"
      v-bind:topImage="hero.topImage"
      v-bind:topTextImage="hero.topTextImage"
      
      :key="hero.id">
    </hero-component>
    <callout-component>
      <div class="section">
        <div class="container">
          <div class="card">
            <div class="card-content has-text-centered">
              <div id="text-a-trainer-title" class="title is-spaced is-uppercase">Text-A-Trainer</div>
              <div class="subtitle description is-uppercase">
                YOU'VE GOT QUESTIONS, THEY'VE GOT ANSWERS. MESSAGE OUR<br class='is-hidden-touch'/><span class='is-hidden-desktop'>&nbsp</span>TRAINERS TO GET ON-DEMAND TIPS, TRICKS, AND TRAINING INTEL.
              </div>
              <div class="subtitle is-uppercase">Coming 8/20</div>
            </div>
          </div>
        </div>
      </div>
    </callout-component>
  </div>
</template>

<script>
import CalloutComponent from '@/components/content/Callout.vue';
import HeroComponent from '@/components/content/Hero.vue';

export default {
  name: 'About',
  components: { CalloutComponent, HeroComponent }
};
</script>

<style>
.main {
  padding-top: 5px;
}
</style>
