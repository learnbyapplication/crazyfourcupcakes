<template lang="pug">
  nav.navbar
    navigation-menu(:links='links')
    social-links-menu(:accounts='accounts')
</template>

<script lang="ts">
  import INavigationLink from "./INavigationLink";
  import ISocialMediaAccount from "./ISocialMediaAccount";
  import NavigationMenu from "@/components/NavigationMenu.vue";
  import SocialLinksMenu from "@/components/SocialLinksMenu.vue";
  import { Component, Vue } from "nuxt-property-decorator";

  @Component({
    components: {
      NavigationMenu,
      SocialLinksMenu,
    },
    props: {
      links: Array,
      accounts: Array,
    },
  })
  export default class extends Vue {
      public accounts: ISocialMediaAccount[];
      public links: INavigationLink[];
  }
</script>
