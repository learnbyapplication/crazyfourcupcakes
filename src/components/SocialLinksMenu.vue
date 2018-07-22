<template lang="pug">
  ol.navbar-end.social-links-menu
    li.navbar-item.social-links-menu__item(v-for="account in accounts")
      SocialLink(:account='account')
</template>

<script lang="ts">
  import ISocialMediaAccount from "./ISocialMediaAccount";
  import SocialLink from "./SocialLink.vue";
  import { Component, Vue } from "nuxt-property-decorator";

  @Component({
    components: {
      SocialLink,
    },
    props: {
      accounts: Array,
    },
  })

  export default class extends Vue {
    public accounts: ISocialMediaAccount[];
  }
</script>

<style lang="sass">
  .social-links-menu
    text-align: center
    &__item
      display: inline-block
</style>
