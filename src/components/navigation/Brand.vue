<template>
  <div class="brand columns">
    <div id="first-column" class="column is-one-third">
      <a href="https://furthermore.com" target="_blank">
        <img class="is-pulled-left" src="@/assets/img/FM_logo.png" alt="Logo">
      </a>
    </div>
    <div id="second-column" class="column is-one-third is-centered">
      <a href="https://furthermore.com/platformx">
        <img id="image-2" src="@/assets/img/platform_logo.png" alt="Logo">
      </a>
    </div>
    <div id="third-column" class="column is-one-third">
      <a target="_blank" href="https://www.americanexpress.com/us/credit-cards/features-benefits/platinum/index.html?extlink=CH=dm-CU=us-BU=GABM-REF=4847682_224372204_224372204-TST=plat18-EEP_URL=g_disp&amp;cpid=g_disp">
        <img id="image-3a" class="is-pulled-right is-hidden-touch" src="@/assets/img/amex_logo.png" alt="Logo">
        <img id="image-3b" class="is-pulled-right is-hidden-desktop" src="@/assets/img/amex.png" alt="Logo">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandComponent'
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../assets/sass/colors.scss';

.brand {
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (max-width: $tablet) {
    justify-content: space-around;
    margin: 0;
    height: 60px;
  }
  .column {
    height: 75px;
    padding: 0.5rem 0.75rem;
    @media screen and (max-width: $tablet) {
      flex-basis: auto;
      padding: 0.65rem 0.75rem;
      height: 60px;
    }
    img {
      height: 100%;
      width: auto;
      padding: 10px;
      display: block;
      margin: auto;
      @media screen and (max-width: $tablet) {
        padding: 5px;
      }
    }
    &#third-column {
      padding: 11px;
      img {
        @media screen and (max-width: $tablet) {
          padding: 7px;
        }
      }
    }
  }
}
</style>
