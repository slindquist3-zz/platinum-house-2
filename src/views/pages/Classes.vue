<template>
  <div class="classes">
    <section-component page="classes-page">
      Equinox Tier X coaches&mdash;our most elite personal trainers&mdash;and leading group fitness talent will guide you through a unique metabolic conditioning session. Artfully combining mobility, strength, and cardio, it's the smartest and most effective workout you'll ever do.
    </section-component>
    <div class="section container" id="classlist-section">
      <div class="columns classlist">
        <div class="column is-three-fifths-desktop is-half-tablet has-text-centered">
          <callout-component>
            <img src="@/assets/img/platform_x_hamptons_gray.png" />
            <div class="subtitle is-uppercase">TAKE PLATFORM X CLASSES<br/>EVERY FRIDAY AND SATURDAY<br/>7/27 - 8/25
            </div>
            <div class="subtitle is-uppercase">LOCATION:<br/>
      SOULCYCLE BARN<br/>
      BRIDGEHAMPTON, NEW YORK</div>
            <button-component link="https://platformx-equinox.eventbrite.com/" type="is-primary">RSVP NOW</button-component>
            <div id="equinox-members-only" class="subtitle has-text-centered">*Equinox members only</div>
          </callout-component>
        </div>
        <div class="column is-one-third-desktop is-half-tablet is-hidden-mobile">
          <classlist-component></classlist-component>
        </div>
      </div>
    </div>

    <callout-component>
      <div class="section">
        <div class="container">
          <div class="card">
            <div id="experience-card-content" class="card-content has-text-centered">
              <img src="@/assets/img/platform_x_experience.png" />
              <div class="project-experience-callout subtitle is-uppercase"><span>Coming Soon</span></div>
              <div class="markets">
                <div class="market subtitle is-uppercase">
                  <b>CHICAGO:</b><br/>GOLD COAST
                </div>
                <div class="market subtitle is-uppercase">
                  <b>LOS ANGELES:</b><br/>
                  WESTWOOD<br/>
                  SPORTS CLUB
                </div>
                <div class="market subtitle is-uppercase">
                  <b>NEW YORK CITY:</b><br/>
                  COLUMBUS CIRCLE<br/>
                  HIGH LINE<br/>
                  WEST 92ND STREET
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </callout-component>
  </div>
</template>

<script>
import SectionComponent from '@/components/content/Section.vue';
import ClasslistComponent from '@/components/content/classes/Classlist.vue';
import CalloutComponent from '@/components/content/Callout.vue';
import ButtonComponent from '@/components/shared/Button.vue';

export default {
  name: 'Classes',
  components: { SectionComponent, ClasslistComponent, CalloutComponent, ButtonComponent }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../assets/sass/colors.scss';

.classes {
  #classlist-section {
    background: $lightGray;
    .columns {
      justify-content: space-between;
      .column.is-three-fifths-desktop {
        border-right: 1px solid $medGray;
        @media screen and (max-width: $desktop) {
          border-right: none;
        }
        img {
          @media screen and (max-width: $tablet) {
            padding-bottom: 30px;
            max-width: 500px;
            width: 70vw;
          }
        }
      }
    }
  }
  .project-experience-callout {
    padding: 40px 0;
    margin-bottom: 0;
    line-height: 0.5;
    text-align: center;
    position: relative;
    span {
      display: inline-block;
      position: relative;
      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 2px;
        border-bottom: 1px solid $darkGray;
        top: 5px;
        width: 210px;
        @media screen and (max-width: $desktop) {
          width: 12vw;
        }
      }
      &::before {
        right: 100%;
        margin-right: 15px;
      }
      &::after {
        left: 100%;
        margin-left: 15px;
      }
    }
  }
}
</style>
