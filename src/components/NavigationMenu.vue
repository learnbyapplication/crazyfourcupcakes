<template lang="pug">
  nav
    ol.navigation-links-menu
      li.navigation-links-menu__item(v-for="link in links")
        <nuxt-link :to="url(link)">{{ link.title }}</nuxt-link>
</template>

<script lang="ts">
  import INavigationLink from "./INavigationLink";
  import { Component, Vue } from "nuxt-property-decorator";

  @Component({
    props: {
      links: Array,
    },
  })

  export default class extends Vue {
    public links: INavigationLink[];

    public data() {
      return {
        url: function (link: INavigationLink) {
          return { name: link.link  };
        }
      };
    };
  }
</script>

<style lang="sass">
  .navigation-links-menu
    text-align: center
    &__item
      display: inline-block
</style>
