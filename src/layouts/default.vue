<template lang="pug">
  main
    social-links-menu(:accounts='socialAccounts')
    nuxt
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator";
  import CoreConfig from "@@/config/core.json";
  import SocialLinksConfig from "@@/config/links.social.json";
  import SocialLinksMenu from "@/components/SocialLinksMenu.vue";

  @Component({
    components: {
      CoreConfig,
      SocialLinksConfig,
      SocialLinksMenu,
    },
  })
  export default class extends Vue {
    public data() {
      return {
        socialAccounts: SocialLinksConfig.accounts,
      };
    }

    // Uncommenting this currently breaks things...
    // head () {
    //   return {
    //     title: CoreConfig['title'],
    //     meta: [
    //       { charset: 'utf-8' },
    //       { hid: '', name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //       { name: 'keywords', content: CoreConfig['meta']['keywords'] },
    //       { name: 'description', content: Coreconfig['meta']['description'] },
    //     ],
    //   };
    // };
  }
</script>
