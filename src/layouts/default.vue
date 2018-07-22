<template lang="pug">
  main
    navigation-menu(:links='navigationLinks')
    social-links-menu(:accounts='socialAccounts')
    nuxt
</template>

<script lang="ts">
  import CoreConfig from "@@/config/core.json";
  import NavigationConfig from "@@/config/links.nav.json";
  import NavigationMenu from "@/components/NavigationMenu.vue";
  import SocialLinksConfig from "@@/config/links.social.json";
  import SocialLinksMenu from "@/components/SocialLinksMenu.vue";
  import { Component, Vue } from "nuxt-property-decorator";

  @Component({
    components: {
      CoreConfig,
      NavigationConfig,
      NavigationMenu,
      SocialLinksConfig,
      SocialLinksMenu,
    },
  })
  export default class extends Vue {
    public data() {
      return {
        navigationLinks: NavigationConfig,
        socialAccounts: SocialLinksConfig.accounts,
      };
    }

    public head() {
      return {
        meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { name: "keywords", content: CoreConfig.meta.keywords },
          { name: "description", content: CoreConfig.meta.description },
        ],
        title: CoreConfig.title,
      };
    }
  }
</script>
