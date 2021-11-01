<template>
<v-btn
  rounded
  dark
  link
  style="text-decoration: none"
  :href="link" target="_blank"
>
  <v-icon>mdi-apple</v-icon> Apple Store
</v-btn>
</template>

<script>
export default {
  name: "AppStore",
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="stylus">

</style>
