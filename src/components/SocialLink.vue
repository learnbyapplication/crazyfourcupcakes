<template lang="pug">
  a(:href="url")
    span.icon.has-text-info
      fa-icon.social-links-menu__icon(:icon="icon")
</template>

<script lang="ts">
  import ISocialMediaAccount from "./ISocialMediaAccount";
  import { Component, Vue } from "nuxt-property-decorator";

  @Component({
    props: {
      account: Object,
    }
  })
  export default class extends Vue {
    account: ISocialMediaAccount;

    data () {
      let url = "#";
      switch (this.account.service) {
        case "facebook": {
          url = "https://facebook.com/" + this.account.id + "/";
          break;
        }
        case "twitter": {
          url = "https://twitter.com/" + this.account.id + "/";
          break;
        }
        case "google-plus": {
          url = "https://plus.google.com/" + this.account.id + "/";
          break;
        }
      }

      return {
        icon: ["fab", this.account.service + "-square"],
        url: url
      };
    }
  }
</script>
