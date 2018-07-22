<template lang="pug">
  nav
    ol.social-links-menu
      li.social-links-menu__item(v-for="account in accounts")
        SocialLink(:account='account')
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator";
  import SocialLink from "@/components/SocialLink.vue";
  import ISocialMediaAccount from "@/components/ISocialMediaAccount.ts";

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
