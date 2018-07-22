<template lang="pug">
  main
    navigation(:links='navigationLinks', :accounts='socialAccounts')
    nuxt
</template>

<script lang="ts">
  import CoreConfig from "@@/config/core.json";
  import Navigation from "@/components/Navigation.vue";
  import NavigationConfig from "@@/config/links.nav.json";
  import SocialLinksConfig from "@@/config/links.social.json";
  import { Component, Vue } from "nuxt-property-decorator";

  @Component({
    components: {
      CoreConfig,
      Navigation,
      NavigationConfig,
      SocialLinksConfig,
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
          { name: "keywords", content: CoreConfig.meta.keywords.join(",") },
          { name: "description", content: CoreConfig.meta.description },
        ],
        title: CoreConfig.title,
      };
    }
  }
</script>
