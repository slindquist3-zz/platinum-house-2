<template>
  <section class="section">
    <div class="classlist-body">
      <div class="container">
        <div class="section columns">
          <div class="column is-three-fifths">
            <img src="@/assets/img/platform_x_hamptons_gray.png" />
            <div class="subtitle is-uppercase has-text-centered">TAKE PLATFORM X CLASSES<br/>EVERY FRIDAY AND SATURDAY<br/>7/27 - 8/25
            </div>
            <div class="subtitle is-uppercase has-text-centered">LOCATION:<br/>
SOULCYCLE BARN<br/>
BRIDGEHAMPTON, NEW YORK</div>
            <a href="https://platformx-equinox.eventbrite.com/" target="_blank" class="button is-uppercase">RSVP NOW</a>
          </div>
          <div class="column is-one-third is-hidden-mobile">
            <div class="schedule">
              <ul>
                <li><span>Week 1:</span>
                  <ul>
                    <li><span>Friday 7/27 10:30 AM</span></li>
                    <li><span>Saturday 7/28 11:45 AM</span></li>
                  </ul>
                </li>

                <li><span>Week 2:</span>
                  <ul>
                    <li><span>Friday 8/3 10:30 AM</span></li>
                    <li><span>Friday 8/3 11:30 AM</span></li>
                    <li><span>Saturday 8/4 11:30 AM</span></li>
                  </ul>
                </li>

                <li><span>Week 3:</span>
                  <ul>
                    <li><span>Friday 8/10 10:30 AM</span></li>
                    <li><span>Saturday 8/11 11:30 AM</span></li>
                  </ul>
                </li>

                <li><span>Week 4:</span>
                  <ul>
                    <li><span>Friday 8/17 10:30 AM</span></li>
                    <li><span>Saturday 8/18 11:30 AM</span></li>
                  </ul>
                </li>

                <li><span>Week 5:</span>
                  <ul>
                    <li><span>Friday 8/24 10:30 AM</span></li>
                    <li><span>Friday 8/24 11:30 AM</span></li>
                    <li><span>Saturday 8/25 11:30 AM</span></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ClassComponent'
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
