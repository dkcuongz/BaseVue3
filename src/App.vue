<template>
  <div id="appContainer">
    <vue3-progress/>
    <!--    <component :is="layout">-->
    <router-view/>
    <!--    </component>-->
  </div>
</template>
<style></style>
<script>
// const default_layout = "default";
export default {
  data() {
    return {}
  },

  computed: {
    // layout() {
    //   return (this.$route.meta.layout || default_layout) + "-layout";
    // }
  },
  created() {
    // nothing defined here (when this.$route.path is other than "/")
    // console.log(this.$route, this.$route.meta.layout);
  },
  updated() {
    // something defined here whatever the this.$route.path
    // console.log(this.$route, this.$route.meta.layout);
  }
};
</script>
