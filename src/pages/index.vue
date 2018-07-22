<template>
  <body>
    <h1>Initial Commit</h1>
    <facebook-link/>
    <google-plus-link/>
    <twitter-link/>
  </body>
</template>

<script lang="ts">
import FacebookLink from "../components/FacebookLink.vue";
import GooglePlusLink from "../components/GooglePlusLink.vue";
import TwitterLink from "../components/TwitterLink.vue";

export default {
  components: {
    FacebookLink,
    GooglePlusLink,
    TwitterLink,
  },
};
</script>